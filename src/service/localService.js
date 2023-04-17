export const USER_LOGIN = 'USER_LOGIN'
export const localUserServ =  {
    get:()=>{
        let jsonData = localStorage.getItem(USER_LOGIN);
        return JSON.parse(jsonData);
    },
    set:(userInfo)=>{
        let jsonData=JSON.stringify(userInfo);
        localStorage.setItem(USER_LOGIN,jsonData);
    },
    remove:()=>{
        localStorage.removeItem(USER_LOGIN);
    },
}