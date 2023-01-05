import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {

    let mockData = [{ id: 1, name: "demo1", age: 22 }, { id: 2, name: "demo2", age: 21 }]
    const { t, i18n } = useTranslation();

    const langChangeHandler = (e:any) =>{
        console.log("langChangeHandler", i18n.language,e)
        if(e.target.value === "en"){
            i18n.changeLanguage("en")
        }else{
            i18n.changeLanguage("fr")
        }
    }

    console.log("useTranslationuseTranslation",)
    return (
        <>
            {mockData && mockData?.length && mockData.map((item, index) => (
                <div key={index}>
                    <label>{t('main.name')}</label>
                    <h5>{item.name}</h5>
                    <label>{t('main.age')}</label>
                    <p>{item.age}</p>
                </div>
            ))
            }
            <select onClick={(e) =>{langChangeHandler(e)}}>
                <option value="en">English</option>
                <option value="fr">French</option>
            </select>
        </>
    )
}
export default Main;