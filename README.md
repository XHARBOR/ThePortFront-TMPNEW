# ThePortFront-TMP
A temporary repo for quickly deploying cues to OBXR using the Summer 2023 Revamped Data Structure. In the future, we will likely have some form of cue building interface. For the time being, clone this repo and use it to deploy edits to the database...

## Setup
### Step 1: Clone and install the repo
Begin by cloning this repo onto your computer by running `git clone https://github.com/XHARBOR/ThePortFront-TMPNEW.git`. Once this is finished, run `npm install` to properly initialize all dependencies.

### Step 2: Add your API key
This project uses [Firebase Real Time Database](https://firebase.google.com/docs/database) for data management. In order to publish cues, you will need to get an authentication config object from Michael. When you initialize your clone of the repo, create the file `base.js` in the `src` directory and paste the following code with the firebase config replaced with the object received from Michael...
```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {YOUR-AUTHENTICATION-OBJECT};

export const appDB = initializeApp(firebaseConfig);
```

##### Example Authentication Config Object
```js
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
```

### Step 3: Run, edit, and publish your cues
Once you have replaced the authentication object, run `npm run dev` in the command terminal and navigate to `http://localhost:3000`. Here you should see a simple interface with one button to write your cues to the database. To edit your cues, navigate to `src/assets/DB.json` and edit the json direclty. Once you are ready to publish, save your file, make sure your code has recompiled, and use the interface at `http://localhost:3000` to write your cues.

## About OBXR Data
### Data Overview
There are two main components of the OBXR database: `projects` and the `userMap`. Projects contain all of the cueing data for an events while the userMap associates all users with their individual projects. When writing cues, you do not need to worry about including the project or user data of other creators; You will only add or update the data of projects and users you include. Please **DO NOT** attempt to write data for projects or users that are not your own; this **will overwrite** the data of other creators.
```json
{
    "projects": {},
    "userMap": {}
}
```

### User Map
The `userMap` associates usernames with project data for in-world cueing, role names, and display names. Unlike previous OBXR seasons, you **should not** the same username across multiple projects. The sign-in process can vary from platform to platform. For instance, Hubs and Ethereal Engine have attendees and team members enter usernames directly in the url while Hyperfy has an in-world input field.
```json
"userMap": {
    "sampleUsername": {
        "project": "sampleProject",
        "displayName": "sampleDisplayName",
        "role": "sampleRole"
    }
}
```
**Username -** The username is used by your team members when signing-in to your given platform to associate them with the proper cueing data. Usernames must be unique for each project and you should not use any of the reserved usernames: `spectator`, `participant`, or `cinematic`.

**project -** The project name should be the same name used in the `projects` section of the database. This parameter associates a user with their in-world cues.

**displayName -** The display name automatically sets the name of a user's avatar on load.

**role -** The role parameter allows you to specify cues to a subset of users. Unlike usernames, you do not need to worry about reusing role names across multiple projects. Some of the most common role conventions include: `spectator`, `participant`, `performer`, `stagemanager`.

_How can I scope cues to individual users?_\
You should use **usernames** to target individual users with cues. While we have previously used displayNames to scope cues this way, this new structure relies on usernames only. 

_What username should my event attendees use to sign in?_\
You should manually create usernames for your project to segment your audience just as you would for your team.

### Project Data
The `projects` section of the OBXR database contains all of the cueing data for each project. Each project name should be unique and should be the same as the project name specified for its users in the `userMap` section of the database. 
```json
"projects": {
    "sampleProjectName": {
        "listCue": [],
        "inWorldCueingMap": {
            "sampleUsername": [
                {
                    "group": false,
                    "name": "sampleCue",
                    "position": {
                        "x": 3,
                        "y": 1,
                        "z": 2
                    },
                    "scale": 0.5,
                    "reactivationTimeout": 1000
                }
            ]
        },
        "objMap": {},
        "animMap": {}
    }
}
```
**listCue -** This array specifies all cues for a given project. For more information about building cues, see this guide: TBD

**inWorldCueingMap -** This object associates all in-world cues with an individual username. In world cues are rendered as interactable cueing objects and their appearance varies from platform to platform.\
    - `group` (boolean) specifies whether the in-world cue triggers a group.\
    - `name` (string) specifies the name of the cue to be triggered.\
    - `position` (vector3) specifies the position of the in-world cueing object.\
    - `scale` (number) specifies the scale of the in-world cueing object.\
    - `reactivationTimeout` (integer) specifies the time in milliseconds before an in-world cue can be triggered again. A value less than 0 will prevent a cue from being reactivated.

**objMap -** TBD. This might be used for the object state system, which is in development.

**animMap -** TBD. This might be used for more advanced animations, which is in development.

## Important Notes
### Keep your data safe
The OnBoardXR database is an actively updated by a number of users. We recommend that you set up an external github repo for your data and regularly commit edits in case active data is overwritten.
