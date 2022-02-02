const group = [
    {
        name: "박정훈",
        address: "광명",
        age: 27,
        hobby: "드라마 시청"
    },
    {
        name: "문다빈",
        address: "합천",
        age: 25,
        hobby: "잔디 심기"
    },
    {
        name: "채정아",
        address: "죄송합니다",
        age: 24,
        hobby: "알고리즘 문제 풀기"
    }
]

const introduce = group.forEach(member =>
    console.log(
        `안녕하세요. ${member.name}씨는 ${member.address}에 삽니다. 나이는 ${member.age}살이며, 취미는 ${member.hobby}입니다.`
    )
);