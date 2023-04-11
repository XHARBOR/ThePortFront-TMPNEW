# ThePortFront-TMP
A temporary repo for quickly deploying cues to OBXR. In the future, we will likely have some form of cue building interface. For the time being, clone this repo and use it to deploy edits to the database...

## Setup
### Step 1: Clone and install the repo
Begin by cloning this repo onto your computer by running `git clone https://github.com/XHARBOR/ThePortFront-TMP.git`. Once this is finished, run `npm install` to properly initialize all dependencies.

### Step 2: Add your API key
This project uses Firestore for data management. When you initialize your clone of the repo, navigate to `src/base.js`. You should notice that line 5 has "ADD AUTHENTICATION OBJECT HERE" written in `initializeApp()`. The DB admin will provide you with a revokable API object which you should copy and paste to replace "ADD AUTHENTICATION OBJECT HERE". NOTE: You should not put this API object in quotation marks.

##### Example API Object
`
{
    apiKey: "APIKEY",
    authDomain: "HOSTNAME.firebaseapp.com",
    databaseURL: "https://HOSTNAME-default-rtdb.firebaseio.com",
    projectId: "PROJECTNAME",
    storageBucket: "HOSTNAME.appspot.com",
    messagingSenderId: "ID",
    appId: "ID",
    measurementId: "ID"
}
`

### Step 3: Run, edit, and publish your cues
Once you have replaced the API key, run `npm run dev` in the console and navigate to `http://localhost:3000`. Here you should see a simple interface with one button to write your cues to the database. To edit your cues, navigate to `src/assets/DB.json` and edit the json direclty. Once you are ready to publish, save your file, make sure your code has recompiled, and use the interface at `http://localhost:3000` to write your cues.

## Important Notes
### Supporting Docs

Project Data Anatomy and Hosting: TBD

[UserMap & UserList](https://futurestages.github.io/OnBoardXR_Landing_Page/docs/cue-system/#userlist--usermap)

[ListCue](https://futurestages.github.io/OnBoardXR_Landing_Page/docs/cue-system/#listcue)

[ObjMap](https://futurestages.github.io/OnBoardXR_Landing_Page/docs/cue-system/#objmap)

[AnimMap](https://futurestages.github.io/OnBoardXR_Landing_Page/docs/cue-system/#animmap)

[Example Cues](https://futurestages.github.io/OnBoardXR_Landing_Page/docs/cue-system/#cue-types-and-samples)

### Keep your data safe
The OnBoardXR database is an actively updated by a number of users. We recommend that you set up an external github repo for your data and regularly commit edits to it in case active data is overwritten.
