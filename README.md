# coldnetwork
Hides annoying or distracting elements like job offers or hot network questions from sidebar on stackoverflow.com sites

## Create a signed .xpi file

1. Create a ZIP file from
   - the `icons` folder and
   - the files `hide.js`, `manifest.json`, `options.html` and `options.js`
2. Login to https://addons.mozilla.org
3. My Add-ons > Upload a new add-on
4. Follow the instructions, upload the ZIP file you just created
5. Once you get the notification that the add-on is signed and ready to download, do so

## Temporary installation

1. Open `about:debugging`
2. Click *Load add-on temporarily ...*
3. Select the `manifest.json` file from this repository

By default the add-on does not hide any of the possibly annoying or distracting elements. To change these settings

1. Open `about:addons`
2. Click on *Preferences* for the *ColdNetwork* add-on
3. Check for those items you want to hide
4. Click *Save* button

## Permanent installation

1. Open `about:addons`
2. Click on the settings gear
3. Choose *Install add-on from file ...*
4. Choose the `.xpi` file you downloaded from this repository
5. Confirm that you understand that this add-on will require access to browser storage by clicking *Add*
6. Click *OK*
