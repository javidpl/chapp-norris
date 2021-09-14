
export default function sortEmails(emailArr){
    const splitedEmails = emailArr.map(email => email.split("@"));
    const sortedEmails = splitedEmails.sort((a,b) => {
        /* first: sort emails for domain name*/
        if(a[1] < b[1]) { 
            return -1; 
        }
        if(a[1] > b[1]) { 
            return 1; 
        }
        /* second: sort emails for email name */
        if(a[0] < b[0]) {  
            return -1; 
        }
        return 0;
    });
    const joinedEmails = sortedEmails.map(mail => mail.join("@"))
    return joinedEmails;
}