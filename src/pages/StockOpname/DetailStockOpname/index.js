import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors, fonts, globalStyle, showError} from '../../../utils';
import {Gap, Header, LoadBar, NullData} from '../../../components';
import {useDispatch} from 'react-redux';
import {setLoadingGlobal} from '../../../configs';
import {DeleteStock, ShowStockOpname} from '../../../services';
import {isEmpty} from 'lodash';
import List from './List';

export default function DetailStockOpname({navigation, route}) {
  const idBook = route.params;
  const dispatch = useDispatch();
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const title = listData?.judulBuku;
  const oldStock = listData?.stockLama;
  const newStock = listData?.stockBaru;
  const listBooks = listData?.listData;

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await ShowStockOpname(idBook);
      const data = result.detail;
      setListData(data);
    } catch (error) {
      console.log('error', error);
      showError('Terjadi kendala');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (item) => {
    dispatch(setLoadingGlobal(true));
    try {
      const result = await DeleteStock(idBook);
      console.log('cek delete', result);
      fetchData();
    } catch (error) {
      console.log('error', error);
      showError('Terjadi kendala');
    }
    setShowAlert(false);
    dispatch(setLoadingGlobal(false));
  };

  console.log('cek idBook', idBook);
  console.log('cek listData', listData);
  return (
    <View style={globalStyle.page}>
      <Header
        type="back"
        title="Detail Buku"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.body}>
        {loading ? (
          <LoadBar />
        ) : isEmpty(listData) ? (
          <NullData />
        ) : (
          <>
            <View style={styles.card}>
              <Text style={styles.title}>{title}</Text>
              <Gap height={20} />
              <View style={styles.row}>
                <Text style={styles.subTitle}>
                  Sistem: <Text style={styles.info}>{oldStock}</Text>
                </Text>
                <Text style={styles.subTitle}>
                  Scan: <Text style={styles.info}>{newStock}</Text>
                </Text>
              </View>
            </View>
            <Gap height={20} />
            <ScrollView style={styles.listWrapper}>
              {isEmpty(listBooks) ? (
                <NullData />
              ) : (
                listBooks?.map((item, idx) => {
                  return (
                    <List
                      data={item}
                      key={idx}
                      showAlert={showAlert}
                      setShowAlert={setShowAlert}
                      onDeletePress={() => handleDelete(item)}
                    />
                  );
                })
              )}
            </ScrollView>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1},
  card: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    shadowColor: colors.black,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  title: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    color: colors.text.primary,
    flexShrink: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: fonts.primary.normal,
    fontSize: 15,
    color: colors.text.primary,
  },
  info: {
    fontFamily: fonts.primary.bold,
    fontSize: 15,
    color: colors.text.primary,
  },
  listWrapper: {
    flexGrow: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    shadowColor: colors.black,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
});
