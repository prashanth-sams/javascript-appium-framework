# Javascript Appium Framework
> Javascript Appium Framework built using WebDriverIO

### Prerequisites
- Add Android sdk environment details in `~/.bashrc`

```
sudo vi ~/.bashrc
```
```
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
export PATH=$PATH:$JAVA_HOME/bin:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools/bin
```
or
```
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools
```
- Make temp update in the same window
```
source ~/.bashrc
```

### Installation
```
sudo npm install -g appium

npm install
```

### Runner
```
npm test
```

### Report
```
sudo npm install -g allure-commandline --save-dev
allure generate allure-results/ && allure open
```

### UIAutomatorViewer
> Open terminal and enter
```
/Users/$(whoami)/Library/Android/sdk/tools/bin/uiautomatorviewer
```