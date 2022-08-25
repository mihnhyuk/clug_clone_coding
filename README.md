# 클러그 클론 코딩

네이버 블로그 클론 코딩

![Untitled](./%08readme/Untitled.png) |![Untitled](./%08readme/Untitled%201.png) 
--- | --- |


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
  <!--
    블로그엔 이웃, 서로이웃과 같은 개념이 있는 거로 아는데 해당 개념도 함께 포함시켜주셨으면 좋을 것 같아요. 코드 상에서는 ENUM을 활용한다면 쉬울거에요!
-->  
    우선 블로그 이름과 주인의 닉네임이 보이고 방문자 수, 그리고 글 목록이 보입니다. 이외에도 대문 사진이나 아이콘 같은 이미지들이 있습니다. 게스글의 좋아요 여부도 있지만, 로그인이나 토큰 관련 기술을 적용해야 할 듯 싶어 제외했습니다. 게시글의 목록은 게시글에 대한 데이터로 따로 분리를 했습니다.
    
- 게시글
<!--
    로그인 관련 기술이 들어가더라도, (로그인이 되어있다는 가정 하에)현재 요청하고 있는 유저의 정보를 알고 있을테니 게시글 좋아요 여부를 함께 넣어주는것도 가능했을 것 같아요!
-->

    다음은 게시글 데이터입니다. 첨부된 사진에는 하나의 블로그에 대한 정보만 있지만, 데이터에는 여러 블로그가 있다는 가정하에 만들었습니다. 블로그별로 게시글 목록을 묶기 위해 key값으로 블로그의 이름(또는 주소)을 사용하고 각각 게시글 목록의 객체를 저장하도록 했습니다. 게시글은 각각 제목, 내용, 날짜, 좋아요 수, 댓글 수, 섬네일 이미지를 갖습니다. 
    
<!--
  보통 블로그 메인화면은, 하나의 블로그에 대한 메인화면일거에요. 따라서 여러 블로그가 있다는 가정보다는 여러 게시글 리스트를 어떻게 반환해줄 것인가를 더 집중해보는 것도 좋은 경험일 것 같아요
  메인화면이자, 게시글 리스트의 요약 조회임도 생각해보면 좋아요. 예시를 들어볼게요.
  ```json
   {
    posts: [
      {
        thumbnail: "이미지 주소",
        title : "1월도 안녕",
        content : "[1월 1일] 어쩌고 저쩌고",
        heartNum: 1,
        commentNum: 3,
        currentUserInfo: {
          id: 121443,
          isLike: true
        }
        createdAt : "2022.08.08",
      }
    ]
   } 
  ```
-->
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
    
<!--
  화면을 자세히 살펴보시면, 댓글의 계층은 메인 댓글 + 서브 댓글 이렇게 두 계층으로만 이뤄져있음을 알 수 있어요.
  그를 고려한다면 JSON 데이터를 작성해보는게 조금더 수월했을 것 같아요.
  보통 DB 스키마를 먼저 고려하는게 익숙하셨을텐데, 실제로는 JSON 데이터를 먼저 설계하고 스키마를 설계하는 것이 조금 더 유리하더라구요.
  
  저라면 아래와 같은 방식으로 설계했을 것 같아요
  ```json
   {
    comments: [
        {
          userId: 12313,
          nickname: "채채",
          profileImage: "이미지",
          content: "adlkajf",
          heartNum: 1231,
          createdAt: "2022.08.25.adlaf~~",
          subComments: [
            {
              userId: 12313,
              nickname: "채채",
              profileImage: "이미지",
              content: "adlkajf",
              heartNum: 1231,
              createdAt: "2022.08.25.adlaf~~",
            }
          ]
        }
    ]
   } 
  ```
-->
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
<!--
보통은 blog마다 고유의 id를 가지기 때문에, id를 path에 활용하는것이 좋은 방법이 될 수 있어요
아래와 같이 블로그 이름을 path에 적게되면, 같은 블로그 이름을 가진 블로그 조회가 힘들어질 수 있어요.
댓글에 좋아요를 누르는 것은 GET 보다는 PATCH를 활용해보면 어떨까해요.

그를 제외하고 path 설계를 되게 잘하신 것 같아요. 저보다 잘하는듯요
-->
| url | method | description |  |
| --- | --- | --- | --- |
| /{blog-address} | GET | user 이름, 이웃 숫자, 대문사진  /   게시글 목록 JSON |  |
| /{blog-address}/posts/{post-id} | GET | 게시글 JSON |  |
| /{blog-address}/posts/{post-id}/like | GET | 게시글 좋아요 |  |
| /{blog-address}/posts/{post-id}/comments | GET | 댓글 가져오기 |  |
| /{blog-address}/posts/{post-id}/comments | POST | 댓글 등록 |  |
| /{blog-address}/posts/{post-id}/comments/like/{comment-id} | GET | 댓글에 좋아요 |  |

api는 최소한의 기능들만 구현했습니다. 

# 3. 실행화면

: 각각의 blog-address와 post-id에 해당하는 더 많은 경우의 실행화면은 아래 참조

 - clone_coding_캡쳐화면 파일

[clug_clone_coding/post.json at dev-causyj · mihnhyuk/clug_clone_coding](https://github.com/mihnhyuk/clug_clone_coding/blob/dev-causyj/data/post.json)

- /{blog-address} : user 이름, 이웃 숫자, 대문사진  /   게시글 목록 JSON
    
    ![blogpeople.png](/%08readme/blogpeople.png)
    
    : 기본 화면. ‘blopeople’의 블로그 게시글 2가지의 목록을 보여줍니다.  
    
- /{blog-address}/post/{post-id} / 게시글 JSON
    
    ![blogpeople_post_1.png](/%08readme/blogpeople_post_1.png)
    
     : 원하는 블로그 유저의 게시물 하나를 보여줍니다. → “blogpeopl”의 “1”번 게시물  
    
- /{blog-address}/post/{post-id}/like / 게시글 좋아요
    
    ![blogpeople_post_1_like.png](/%08readme/blogpeople_post_1_like.png)
    
    : 게시물의 “likes”항목에서 게시글의 좋아요를 확인할 수 있습니다.
    
- /{blog-address}/post/{post-id}/comment / 댓글 가져오기
    
    ![blogpeople_post_1_comment.png](/%08readme/blogpeople_post_1_comment.png)
    
- /{blog-address}/post/{post-id}/comment / 댓글 등록
<!--
아래의 icon은 보통 유저 정보에 함께 들어있을것이라고 예상했는데, icon도 직접 첨부해서 넣는 방식을 상상하신 것 같아요.

date는 서버에서 지정해줄 수 있으니 서버에서 해당 요청을 받았을 때 넣어주면 좋을 것 같아요.

likeNum, replyNum 과 같은 경우도 서버에서 연산 후에 댓글 조회할 때 내려준다면 조금 더 유리할 것 같아요.
-->
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
    
    ![5_goodjob.png](/%08readme/5_goodjob.png)
    
- /{blog-address}/post/{post-id}/comment/like/{comment-id} /댓글에 좋아요
<!--
댓글 데이터와 유저 간의 좋아요 매핑테이블을 만들면 좋아요 개수를 DB로부터 불러올 수 있을거에요.
-->
    : url에 원하는 게시물에 대한 정보를 입력하고 새로고침을 하면 “likeNum”의 숫자가 올라가는 것을 확인할 수 있습니다. 
    
    ![blogpeople_post_1_comment_like_1.png](/%08readme/blogpeople_post_1_comment_like_1.png)
    

# 4. 프로젝트에서 집중한 부분

- 1. github로 협업
    
    [GitHub - mihnhyuk/clug_clone_coding: 클러그 클론 코딩 대회](https://github.com/mihnhyuk/clug_clone_coding.git)
    
    ![Untitled](/%08readme/Untitled%202.png)
    
    ![Untitled](/%08readme/Untitled%203.png)
    
    github로 clug_clone_coding이라는 중앙저장소를 만들어 효율적으로 협업을 하였습니다. main 브랜치외에 3개의 브랜치를 더 만들어 각자한 작업을 각자 브랜치에 올려 이상이 없는지 확인 후 dev브랜치(메인 브랜치)에 병합하였습니다. 
    
    이런 방법을 사용해서 실제로 작업 중 만들어놓은 샘플 데이터가 파일 쓰기 과정에서 소실 되었지만 쉽게 복구 할 수 있었습니다.
    
- 2.  설계 패턴
    
    라우터 설정과 기능별로 모듈화 하라는 피드백을 받아 설계 패턴을 지키려고 노력했습니다.
    
    시간이 부족하여 원하는 만큼 분리하지는 못한 점이 아쉽습니다.
    
    ![Untitled](/%08readme/Untitled%204.png)
    ![Untitled](/%08readme/Untitled%205.png)
