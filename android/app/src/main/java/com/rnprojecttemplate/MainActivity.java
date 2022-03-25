package com.rnprojecttemplate;

import com.facebook.react.ReactActivity;
import net.zubricky.AndroidKeyboardAdjust.AndroidKeyboardAdjustPackage;
import java.util.Arrays;
import java.util.List;
import com.facebook.react.ReactPackage;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RNProjectTemplate";
  }

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new AndroidKeyboardAdjustPackage()
    );
}
}
