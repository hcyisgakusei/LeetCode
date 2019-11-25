// const str =
//     '<a href="https:www.baidu.com">' +
//     '昂坪360 海陆空全日通/ 大澳通套票</a>' +
//     '查看<a href="https://www.klook.com/article/1617-ngong-ping-36-hong-kong">旅客评价</a>';
//
// const blockKlookLink = (linkString = '') => {
//     return linkString.replace(
//         /(<a.?href="(https|http):\/\/www.klook.com.*".*<\/a>)/g,
//         (aString) => aString.replace('<a', '<span').replace('a>', 'span>')
//     );
// };
const str =
    '<a href=" ">' +
    '昂坪360 海陆空全日通/ 大澳通套票</a>' +
    '查看<a href="https://www.klook.com/article/1617-ngong-ping-36-hong-kong">旅客评价</a>';

const blockKlookLink = (linkString = '') => {
    return linkString.replace(
        // /(<a.*href="(https|http):\/\/www.klook.com.*".*<\/a>)/g,
        /(<a.?href="(https|http):\/\/www.klook.com.*">.*<\/a>)/g,
        (aString) => aString.replace('<a', '<span').replace('a>', 'span>')
    );
};
console.log(blockKlookLink(str));