import React, {useState} from 'react';
import { appDB } from "../base";
import styles from "./MainPage.module.css"
import DB from "../assets/DB.json"
import { getDatabase, ref, update } from "firebase/database"; 


const MainPage = () => {
    const [userInput, setUserInput] = useState({
        feedback: "",
        disabled: false
    });

    const writeDB = async (e) => {
        e.preventDefault();
        console.log('submitting');
        setUserInput((prevState) => {
            return {
                ...prevState,
                disabled: true
            }
        });

        let entry = DB;
        const dbRef = ref(getDatabase(appDB));

        const updates = {};
        let projects = Object.keys(entry['projects']);
        projects.forEach(project => {
            updates['/projects/' + project] = entry['projects'][project];
        })
        let users = Object.keys(entry['userMap']);
        users.forEach(user => {
            updates['/userMap/' + user] = entry['userMap'][user];
        })

        update(dbRef, updates)
        .then(() => {
            setUserInput((prevState) => {
                return {
                    ...prevState,
                    feedback: "success"
                }
            });
            setTimeout(() => {
                setUserInput((prevState) => {
                    return {
                        ...prevState,
                        feedback: "",
                        disabled: false
                    }
                });
            }, 3500);
          })
          .catch((error) => {
            setUserInput((prevState) => {
                return {
                    ...prevState,
                    feedback: "failure"
                }
            });
            setTimeout(() => {
                setUserInput((prevState) => {
                    return {
                        ...prevState,
                        feedback: "",
                        disabled: false
                    }
                });
            }, 3500);
          });
    }

    return (
        <div className={styles.body}>
            <div className={styles.title}>
                <h1>write your project</h1>
            </div>
            <button className={styles.submitButton} type="submit" disabled={userInput.disabled} onClick={writeDB}>write db</button>
            <div className={styles.feedback}>
                <h3>{userInput.feedback}</h3>
            </div>
        </div>
    )
}

export default MainPage;