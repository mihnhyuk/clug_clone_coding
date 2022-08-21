# 클러그 클론 코딩

네이버 블로그 클론 코딩
![Untitled](https://user-images.githubusercontent.com/81398185/185791488-55189753-8be6-4edd-b8ef-595ccac48760.png)

![Untitled](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/Untitled.png)

![Untitled](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/Untitled%201.png)

# 1. 데이터 정의

첨부된 사진에 등장하는 페이지를 크게 세 가지로 구분했습니다.

1. 블로그 메인
2. 게시물
3. 댓글 리스트

게시물 관련 사진은 없지만 충분히 예측 가능하기 때문에 포함 시켰습니다. 

- 메인 페이지
    
    블로그 메인에서 보이는 필요한 데이터를 추려봤습니다.
    
    ```json
    {
    	"userName": "솝트 디자인",
    	"blogName": "Dear",
    	"userAddress": "blogpeople",
    	"neighborNum": 38,
    	"todayVisitor": 0,
    	"totalVisitor": 2807,
    	"frontImage": "img",
    	"iconImage": "img"
    }
    ```
    
    우선 블로그 이름과 주인의 닉네임이 보이고 방문자 수, 그리고 글 목록이 보입니다. 이외에도 대문 사진이나 아이콘 같은 이미지들이 있습니다. 게스글의 좋아요 여부도 있지만, 로그인이나 토큰 관련 기술을 적용해야 할 듯 싶어 제외했습니다. 게시글의 목록은 게시글에 대한 데이터로 따로 분리를 했습니다.
    
- 게시글
    
    다음은 게시글 데이터입니다. 첨부된 사진에는 하나의 블로그에 대한 정보만 있지만, 데이터에는 여러 블로그가 있다는 가정하에 만들었습니다. 블로그별로 게시글 목록을 묶기 위해 key값으로 블로그의 이름(또는 주소)을 사용하고 각각 게시글 목록의 객체를 저장하도록 했습니다. 게시글은 각각 제목, 내용, 날짜, 좋아요 수, 댓글 수, 섬네일 이미지를 갖습니다. 
    
    ```json
    {
      "blogpeople": {
        "1": {
          "postTitle": "[#지금여기 챌린지] 나의 '올여름 핫플'을 모먼트로 만들어주세요!",
          "postContents": "안녕하세요",
          "date": "2022.8.9.",
          "likes": 3479,
          "comments": 440,
          "thumbnail": "img"
        },
        "2": {
          "postTitle": "[EVENT] 여름휴가 알차게! 블로그 마켓 #바캉스템 기획전",
          "postContents": "모두 여름휴가 계획은 세우셨나요? 올 여름 휴가는 어디로 가실 계획이실지 너무 궁금한데요.",
          "date": "2022.7.18.",
          "likes": 2617,
          "comments": 180,
          "thumbnail": "img"
        }
      },
      "blogpeople2": {
        "1": {
          "postTitle": "9월, 이달의 블로그를 추천해 주세요!",
          "postContents": "2022년 9월의 주제는 스포츠, 어학·외국어 공연·전시, 인테리어·DIY 원예·재배, 드라마 입니다",
          "date": "2022.8.18.",
          "likes": 1798,
          "comments": 21,
          "thumbnail": "img"
        },
        "2": {
          "postTitle": "8월, 이달의 블로그를 소개합니다!",
          "postContents": "안녕하세요, 네이버 블로그팀입니다. ",
          "date": "2022.8.3.",
          "likes": 3362,
          "comments": 397,
          "thumbnail": "img"
        }
      }
    }
    ```
    
- 댓글
    
    댓글은 게시글과 비슷하지만 배열로 구성했습니다. 자료가 통일성을 갖으면 좋았겠지만, 디비 없이 JSON으로 데이터를 설계하다보니 어떤 방식으로 데이터를 저장하는게 더 좋을지 고민하며 여러 방법을 써보다가 방법이 갈렸는데 고치지 못했습니다.
    
    댓글 데이터는 각 댓글을 구분하는 고유 id 값과 댓글이 작성된 게시글과 작성한 유저 정보 등이 포함 되어있습니다. 이 중에서 답글 기능을 구현하기 위해, 답글의 수와 답글로 달린 댓글의 id값을 저장하도록 했습니다.
    
    ```json
    {
      "data": [
        {
          "commentId": "1",
          "userId": "1",
          "userHome": "url-to-user-blog",
          "icon": "img",
          "content": "디자인 잘 하고 싶다",
          "date": "2020.8.26. 19:5",
          "replyNum": 1,
          "reply": ["10"],
          "likeNum": 27
        },
        {
          "commentId": "2",
          "userId": "2",
          "userHome": "url-to-user-blog",
          "icon": "img",
          "content": "기대가 됩니다!",
          "date": "2020.8.29. 18:21",
          "replyNum": 2,
          "reply": ["3", "4"],
          "likeNum": 48
        }
      ]
    }
    ```
    

# 2. API 설계

| url | method | description |  |
| --- | --- | --- | --- |
| /{blog-address} | GET | user 이름, 이웃 숫자, 대문사진  /   게시글 목록 JSON |  |
| /{blog-address}/post/{post-id} | GET | 게시글 JSON |  |
| /{blog-address}/post/{post-id}/like | GET | 게시글 좋아요 |  |
| /{blog-address}/post/{post-id}/comment | GET | 댓글 가져오기 |  |
| /{blog-address}/post/{post-id}/comment | POST | 댓글 등록 |  |
| /{blog-address}/post/{post-id}/comment/like/{comment-id} | GET | 댓글에 좋아요 |  |

api는 최소한의 기능들만 구현했습니다. 

# 3. 실행화면

: 각각의 blog-address와 post-id에 해당하는 더 많은 경우의 실행화면은 아래 참조

 - clone_coding_캡쳐화면 파일

[clug_clone_coding/post.json at dev-causyj · mihnhyuk/clug_clone_coding](https://github.com/mihnhyuk/clug_clone_coding/blob/dev-causyj/data/post.json)

- /{blog-address} : user 이름, 이웃 숫자, 대문사진  /   게시글 목록 JSON
    
    ![blogpeople.png](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/blogpeople.png)
    
    : 기본 화면. ‘blopeople’의 블로그 게시글 2가지의 목록을 보여줍니다.  
    
- /{blog-address}/post/{post-id} / 게시글 JSON
    
    ![blogpeople_post_1.png](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/blogpeople_post_1.png)
    
     : 원하는 블로그 유저의 게시물 하나를 보여줍니다. → “blogpeopl”의 “1”번 게시물  
    
- /{blog-address}/post/{post-id}/like / 게시글 좋아요
    
    ![blogpeople_post_1_like.png](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/blogpeople_post_1_like.png)
    
    : 게시물의 “likes”항목에서 게시글의 좋아요를 확인할 수 있습니다.
    
- /{blog-address}/post/{post-id}/comment / 댓글 가져오기
    
    ![blogpeople_post_1_comment.png](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/blogpeople_post_1_comment.png)
    
- /{blog-address}/post/{post-id}/comment / 댓글 등록
    
    : postman프로그램을 이요해 post방식으로 댓글등록
    
    ```
    // INPUT
    {
        "commentId": "5",
          "userId": "5",
          "userHome": "url-to-user-blog",
          "icon": "img",
          "content": "goodjob",
          "date": "2020.10.31. 15:21",
          "replyNum": 2,
          "reply": ["3", "4"],
          "likeNum": 21
    }
    ```
    
    ![5_goodjob.png](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/5_goodjob.png)
    
- /{blog-address}/post/{post-id}/comment/like/{comment-id} /댓글에 좋아요
    
    : url에 원하는 게시물에 대한 정보를 입력하고 새로고침을 하면 “likeNum”의 숫자가 올라가는 것을 확인할 수 있습니다. 
    
    ![blogpeople_post_1_comment_like_1.png](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/blogpeople_post_1_comment_like_1.png)
    

# 4. 어필하고 싶은 점

- 1. github로 협업
    
    [GitHub - mihnhyuk/clug_clone_coding: 클러그 클론 코딩 대회](https://github.com/mihnhyuk/clug_clone_coding.git)
    
    ![Untitled](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/Untitled%202.png)
    
    ![Untitled](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/Untitled%203.png)
    
    github로 clug_clone_coding이라는 중앙저장소를 만들어 효율적으로 협업을 하였습니다. main 브랜치외에 3개의 브랜치를 더 만들어 각자한 작업을 각자 브랜치에 올려 이상이 없는지 확인 후 dev브랜치(메인 브랜치)에 병합하였습니다. 
    
- 2.
    
    ![Untitled](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/Untitled%204.png)
    
    ![Untitled](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20b5a8293429ad4b6a963e64d767c522d0/Untitled%205.png)
