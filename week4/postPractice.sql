SELECT * FROM post;

-- post 데이터의 개수 --
SELECT COUNT(*) from post;

-- post title만 가져오기 --
select title from post;

-- 아무 값이나 INSERT 해보기 --
INSERT INTO post (user_id, title, content, created_at) VALUES (3, 'Happy', 'Server is best', '2/9/2022');

-- id가 3인 데이터 조회하기 --
select * from post where id=3;

-- id가 2인 post 개체들을 모두 출력하기 --
select * from post where id=2;

-- 선택 ) post.sql 내용을 전부 실행시켰다면 user_id가 4인 post+user 개체를 JOIN으로 출력해보기 --
select * from post join "user" on post.user_id = "user".id where post.user_id=4;

-- id가 2인 데이터 날짜 현재로 수정하기 --
update post set updated_at=now() where id=2;

-- id가 4인 데이터 지우기 --
delete from post where id=4;