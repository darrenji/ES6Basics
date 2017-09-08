/**
 * Created by Darren on 2017/9/8.
 */
function isPalindrome(str){
    str = str.replace(/\W/g,'').toLowerCase();
    return (str == str.split('').reverse().join(''));
}