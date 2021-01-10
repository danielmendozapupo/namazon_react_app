export default function userService(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.foundUser.login){
        return{ User: user.foundUser.login}
    }else{
        return {};
    }
}