// SINTASSI FILE JS STORAGE
import {reactive} from 'vue'

export const store = reactive({
    
    headerInfo : [
        "Home", "Page", "Courses", "Features", "Blog", "Shop"
    ],
    headerLogo : "./../../public/images/dark-logo.png",
    dropdowncontents : [
        "Start here", "Success story", "About me", "About us 01", "About us 02", "About us 03", "Contact me", "Contact us", "Purchase guide", "Privicy policy", "Terms of service"
    ],

    footerInfo : {

        title : "Address",
        street : "382 NE 191st St # 87934 Miami, FL 33179-3899",
        number : "+1(305)547-9909 (9am - 5pm EST, Monday-Friday)",
        email : "support@maxcoach.com",

        exploreTitle : "Explore",
        explore : [
            "Start here", "Blog", "About us", "Success story", "Courses", "Contact us"
        ],     

        informationTitle : "Information",
        information : [
            "Membership", "Purchase guide", "Privicy policy", "Term of service"
        ]
    }
});