# 원티드 프리온보딩 인턴십 Week4 과제

## 구현 목표

### [한국임상정보](https://clinicaltrialskorea.com/) 사이트의 검색영역을 클론하기

## API

### [API Repository](https://github.com/walking-sunset/assignment-api)

## 폴더 구조

```
src
├─assets
├─components
├─constants
├─hooks
├─mocks
├─types
└─utils
```

## 기능 구현 & 과제 수행 내용

### 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

- 검색어가 없을 시 **검색어 없음** 표출

### API 호출별로 로컬 캐싱 구현

- expire time을 지정하여 캐싱 내역이 초기화 되도록 설정

### 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- debonce 적용

### API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

## 프로젝트 실행 방법

[API Repository](https://github.com/walking-sunset/assignment-api) 실행 후 아래 명령어 실행

```
$ git clone https://github.com/Ohnaeun/wanted-pre-onboarding-frontend-week4
$ npm install --force (협업은 아니지만 eslint, prettier를 설정함)
$ npm start
```

## 사용 기술

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
