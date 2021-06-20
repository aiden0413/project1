# Memoproject

This is mini memo web application with weather API

# 사용 언어 및 도구

![123](https://user-images.githubusercontent.com/84571770/122160582-24610680-ceab-11eb-9349-9bab800fcdee.png)


# 개발
 1. **React** 를 이용해서 **FrontEnd** 구현 하였습니다.
 2. **Firebase** 를 이용해서 실시간 **DB** 를 사용하였습니다.
 3. **Tailwind CSS** 를 이용해서 **CSS** 를 구현 하였습니다.
 4. **axios** 를 이용해서 날씨 **API** 를 불러와 연동하였습니다.
 5. **OpenWeather** 에서 얻어온 날씨 정보를 얻어 사용하였습니다.
 6. **온도** 정보 값을 이용 하여 메모지 **색 연동** 을 하였습니다.

# 주요기능
 1. **저장**
    - Firebase DB를 이용하여서 저장 버튼을 눌렀을 때, 메모지의 data 값 {id,title,contents,data,weather} 을 저장
 2. **새 메모**
    - Draft js 를 이용하여서 새 메모를 작성할 때 다양한 Tool을 제공하여 좀 더 풍성한 메모를 작성할 수 있습니다.
 3. **수정하기**
    - 메인화면의 저장된 메모지 리스트 중 수정하고 싶은 메모지를 클릭한 후 메모를 수정할 수 있습니다.
    - 메모지 클릭을 통한 직관적인 메모 수정이 가능합니다.
 4. **날짜 DATA**
    - 실시간 날짜 DATA를 연동하여 메모를 작성한 시간을 기록합니다.

 5. **날씨 DATA**
    - OPEN API 를 axios 를 이용하여 실시간으로 날씨 데이터를 불러옵니다.
    - 불러온 데이터 중 필요한 데이터를 추출합니다.
    - 추출 데이터중 "온도(temp)" 데이터를 이용하여 온도 값에 따라 메모지 색을 하여 좀 더 감성적인 메모를 작성할 수 있습니다.
    - 
# Made by

Korea Univ Computer Science

김남오(english name, namo5), **노석준(english name,aiden0413)**, **최진우(Choi Jinwoo, Geenoos)**


