import React, {useState} from 'react';
import {store} from "../base";
import styles from "./MainPage.module.css"
import DB from "../assets/DB.json"
import { doc, getDoc, setDoc, query, where } from "firebase/firestore"; 

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
        let projectName = Object.keys(entry)[0];
        const docRef = doc(store, "onboardxr-db-new23", projectName);

        await setDoc(docRef, DB[projectName], { merge: true });
        console.log("newDB successfully written!");
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
        // docRef.set(DB)
        // .then(() => {
        //     console.log("newDB successfully written!");
        //     setUserInput((prevState) => {
        //         return {
        //             ...prevState,
        //             feedback: "success"
        //         }
        //     });
        //     setTimeout(() => {
        //         setUserInput((prevState) => {
        //             return {
        //                 ...prevState,
        //                 feedback: "",
        //                 disabled: false
        //             }
        //         });
        //     }, 3500);
        // })
        // .catch((error) => {
        //     console.error("Error writing document: ", error);
        //     setUserInput((prevState) => {
        //         return {
        //             ...prevState,
        //             feedback: "error " + error.stringify()
        //         }
        //     });
        //     setTimeout(() => {
        //         setUserInput((prevState) => {
        //             return {
        //                 ...prevState,
        //                 feedback: "",
        //                 disabled: false
        //             }
        //         });
        //     }, 3500);
        // });
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