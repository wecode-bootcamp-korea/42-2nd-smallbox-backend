![image](https://user-images.githubusercontent.com/122417190/224232282-517808fa-3ecf-42f1-9e01-5f49a2f5f3dd.png)

# 🎥 <i>small box</i>
## 스몰박스 소개 
<b>다양한 장르</b>의 영화를 상영하는 CGV 홈페이지를 모티브로,<br>
‘독립영화, 즉 <b>신선한 장르</b>와 <b>특별한 소재</b>를 좋아하거나 입문하고자 하는 관객에게 영화를 선보이자’는 취지로<br>
훌륭하지만 잘 알려지지 않은 독립영화를 소개하고 <b>누구든지 쉽게 접근할 수 있는 예매 서비스</b>를 제공합니다.<br>

<br>

## 프로젝트 정보
### 프로젝트 기간
2023/02/24 ~ 2023/03/10 (약 2주)
<br>
### Front-end
| 이해인 | 김수현 | 방서빈 |
| :-- | :-- | :-- |
[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/sunny-inn) | [<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/laralina) | [<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/seobinbang7) |

### Back-end
| 강신혜 | 장주성 | 김은경 |
| :-- | :-- | :-- |
[<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/ksh0123) | [<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/jangjuseong) | [<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/Silver-bell11) |

<br>

## Github Repository
- [Front-end repository](https://github.com/wecode-bootcamp-korea/42-2nd-smallbox-frontend)
- [Back-end repository](https://github.com/wecode-bootcamp-korea/42-2nd-smallbox-backend)

<br>

## 기술 스택

Front-End
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&amp;logo=javascript&amp;logoColor=white">
<img src="https://img.shields.io/badge/React.js-61DAFB?style=flat&amp;logo=React&amp;logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&amp;logo=styled-components-DB7093&amp;logoColor=white">
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat&amp;logo=ReactRouter&amp;logoColor=white">

Back-End
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&amp;logo=javascript&amp;logoColor=white">
<img src="https://img.shields.io/badge/Node.js-339933?style=flat&amp;logo=Node.js&amp;logoColor=white">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&amp;logo=MySQL&amp;logoColor=white">
<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=flat&amp;logo=Amazon%20EC2&logoColor=white">
<img src="https://img.shields.io/badge/AWS_RDS-527FFF?style=flat&amp;logo=Amazon RDS&amp;logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat&amp;logo=Docker&amp;logoColor=white">

Common
<img src="https://img.shields.io/badge/Git-F05032?style=flat&amp;logo=Git&amp;logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&amp;logo=GitHub&amp;logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&amp;logo=prettier&amp;logoColor=white">
<img src="https://img.shields.io/badge/RestfulAPI-F7533E?style=flat&amp;logo=RestfulAPII&amp;logoColor=white">
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&amp;logo=Visual Studio Code&amp;logoColor=white">
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&amp;logo=Postman&amp;logoColor=white">
<img src="https://img.shields.io/badge/KakaoAPI-FFCD00?style=flat&amp;logo=Kakao&amp;logoColor=white">

Communication
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&amp;logo=Slack&amp;logoColor=white">
<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&amp;logo=Trello&amp;logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=flat&amp;logo=Notion&amp;logoColor=white">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white">

<br>

## <i>small box</i> FLOW
![image](https://user-images.githubusercontent.com/122417190/224229588-3112a7a4-0484-48be-aaeb-0ee669c6f3f2.png)

<br>

## <i>small box</i> ERD
#TODO

<br>

<br>

## MVP SCOPE

<br>


### 💾 back-end

| 기능 | 구현 내용 | 개발 담당 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| DB 모델링 설계 | | 장주성 <br> 김은경 <br>강신혜 |
| 모델링 기반 테이블 및 데이터 생성 | - mysql 및 dbmate 를 활용한 테이블 생성<br> - 비즈니스 로직에 기반한 mock data 생성 | 장주성 <br> 김은경 <br>강신혜 |
| 회원가입/로그인 API | - Kakao 로그인 API 를 사용한 회원가입 및 로그인 기능 구현 | 장주성 |
| 영화정보 API | - 메인페이지 무비차트 조회: 상영예정작 5개, 예매율순 5개 노출 <br>- 영화 상세 페이지 정보 조회: | 김은경 |
| 예매하기 API |  | 장주성<br>강신혜 |
| 결제하기 API | - transaction으로 카트페이지 상품 get, Delete를 구현 <br> - 포인트 부족 시, 결제 차단 <br> - 중복 배송지 추가에 대한 차단 <br> - 총 결제 금액 확인 및 결제 금액 불일치 시 결제 차단 | 장주성 <br> 김은경 <br> 강신혜 |
| 유닛테스트 |  | 장주성 <br> 김은경 <br>강신혜 |
| AWS 배포 및 Docker 세팅 | - EC2 및 RDS를 사용한 | 장주성 <br> 김은경 <br> 강신혜 |
<br>

## 주요 기능 미리보기

### 로그인
![gifit_1678424490243](https://user-images.githubusercontent.com/122417190/224231433-afd9af58-e249-4479-9e17-0bca5c9481df.gif)
<br>
### 메인페이지
![gifit_1678424105746](https://user-images.githubusercontent.com/122417190/224231423-2d501713-3255-4eb4-b5aa-0c45625843a6.gif)
![gifit_1678424262207](https://user-images.githubusercontent.com/122417190/224231425-e1bd5d20-3726-4524-a91c-3f51d24eff9c.gif)
![gifit_1678424355772](https://user-images.githubusercontent.com/122417190/224231431-21383314-8a21-4b9f-b98b-6ccfc54b0e09.gif)
<br>
### 영화페이지
![gifit_1678424614118](https://user-images.githubusercontent.com/122417190/224231434-608db4d2-ff52-43d8-9bbd-ef0c527f73c7.gif)
<br>
### 상세페이지
![gifit_1678424873989](https://user-images.githubusercontent.com/122417190/224231439-b141dcb7-f474-457d-bf8c-e4cdadc6bf9a.gif)
![gifit_1678424927723](https://user-images.githubusercontent.com/122417190/224231440-9ca0eb00-d061-48b8-9a0f-aea5c2ac6d16.gif)
![gifit_1678425106746](https://user-images.githubusercontent.com/122417190/224231442-2abd5aae-f1cf-4382-9d8f-5e0dc1ead5fd.gif)
![gifit_1678425359776](https://user-images.githubusercontent.com/122417190/224231444-440122f8-1a84-42f6-98a1-9bde5d0208fa.gif)
<br>
### 극장페이지
![gifit_1678424786928](https://user-images.githubusercontent.com/122417190/224231435-a1cac1b2-6871-42d9-bff0-2a697ed88c54.gif)
<br>
### 예매하기
![gifit_1678425714130](https://user-images.githubusercontent.com/122417190/224231445-29cba9de-2c0c-4f32-beb5-12df421d9a6e.gif)
![gifit_1678425947575](https://user-images.githubusercontent.com/122417190/224231446-035358f5-c24b-4a38-a1f4-e89a978777a0.gif)
<br>
