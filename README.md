# 클러그 클론 코딩

네이버 블로그 클론 코딩

![image.jpg1](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%209cbdfe1414d7444095141b43cdae28a2/Untitled.png) |![image.jpg2](%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%86%AB%20%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%209cbdfe1414d7444095141b43cdae28a2/Untitled%201.png)
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
    
    우선 블로그 이름과 주인의 닉네임이 보이고 방문자 수, 그리고 글 목록이 보입니다. 이외에도 대문 사진이나 아이콘 같은 이미지들이 있습니다. 게스글의 좋아요 여부도 있지만, 로그인이나 토큰 관련 기술을 적용해야 할 듯 싶어 제외했습니다. 게시글의 목록은 게시글에 대한 데이터로 따로 분리를 했습니다.
    
- 게시글
    
    다음은 게시글 데이터입니다. 첨부된 사진에는 하나의 블로그에 대한 정보만 있지만, 데이터에는 여러 블로그가 있다는 가정하에 만들었습니다. 블로그별로 게시글 목록을 묶기 위해 key값으로 블로그의 이름(또는 주소)을 사용하고 각각 게시글 목록의 객체를 저장하도록 했습니다. 게시글은 각각 제목, 내용, 날짜, 좋아요 수, 댓글 수, 섬네일 이미지를 갖습니다. 
    
    ```json
    {
    	"blogpeople" : {
    		"1" : {
    		"postTitle" : "[#지금여기 챌린지] 나의 '올여름 핫플'을 모먼트로 만들어주세요!",
    		"postContents" : "안녕하세요",
    		"date": "2022.8.9.",
    		"likes": 3470,
    		"comments": 440,
    		"thumbnail": "img"
    		},
    		"2" : {
    			"postTitle" : "아무말",
    			"postContents" : "안녕안녕하세요",
    			"date": "2022.8.10.",
    			"likes": 347,
    			"comments": 44,
    			"thumbnail": "img"
    		}
    		
    	},
    	"blogpeople2" : [{
    		"id": "2",
    		"postTitle" : "[#지금여기 챌린지] 나의 '올겨울 핫플'을 모먼트로 만들어주세요!",
    		"postContents" : "안녕하세요",
    		"date": "2022.8.9.",
    		"likes": 3470,
    		"comments": 440,
    		"thumbnail": "img"
    	}],
    	"blogpeople3" : [{
    		"id": "3",
    		"post-title" : "[#지금여기 챌린지] 나의 '올가을 핫플'을 모먼트로 만들어주세요!",
    		"post-contents" : "안녕하세요",
    		"date": "2022.8.9.",
    		"likes": 3470,
    		"comments": 440,
    		"thumbnail": "img"
    	}]
    }
    ```
    
- 댓글
    
    댓글은 게시글과 비슷하지만 배열로 구성했습니다. 자료가 통일성을 갖으면 좋았겠지만, 디비 없이 JSON으로 데이터를 설계하다보니 어떤 방식으로 데이터를 저장하는게 더 좋을지 고민하며 여러 방법을 써보다가 방법이 갈렸는데 고치지 못했습니다.
    
    댓글 데이터는 각 댓글을 구분하는 고유 id 값과 댓글이 작성된 게시글과 작성한 유저 정보 등이 포함 되어있습니다. 이 중에서 답글 기능을 구현하기 위해, 답글의 수와 답글로 달린 댓글의 id값을 저장하도록 했습니다.
    
    ```json
    {
    	"data": [
    		{
    			"comment-id": "1",
    			"blogName": "blogpeople",
    			"postID" : "1",
    			"user-id": "1",
    			"user-home": "url-to-user-blog",
    			"icon": "img",
    			"content": "디자인 잘 하고 싶다",
    			"date": "2020.8.26. 19:5",
    			"reply-num": 1,
    			"reply": [
    				"10"
    			],
    			"like-num": 1
    		},
    		{
    			"comment-id": "2",
    			"blogName": "blogpeople",
    			"postID" : "1",
    			"user-id": "2",
    			"user-home": "url-to-user-blog",
    			"icon": "img",
    			"content": "디자인 잘 하고 싶다",
    			"date": "2020.8.26. 19:5",
    			"reply-num": 0,
    			"reply": [
    				"3",
    				"4"
    			],
    			"like-num": 4
    		}
    	]
    }
    ```
    

# 2. API 설계

| uri | method | description |
| --- | --- | --- |
| /{blog-address} | GET | user 이름, 이웃 숫자, 대문사진  /   게시글 목록 JSON |
| /{blog-address}/posts/{post-id} | GET | 게시글 JSON |
| /{blog-address}/posts/{post-id}/like | GET | 게시글 좋아요 |
| /{blog-address}/posts/{post-id}/comments | GET | 댓글 가져오기 |
| /{blog-address}/posts/{post-id}/comments | POST | 댓글 등록 |
| /{blog-address}/posts/{post-id}/comment//like/{comment-id} | GET | 댓글에 좋아요 |

api는 최소한의 기능들만 구현했습니다.
