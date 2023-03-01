# Vue Data Subscription Principle

# Vue 의 data 가 변경되면 해당 computed 함수가 자동 실행되는 원리 간단 구현

## 데이터 구독

    Object.defineProperty 함수 descriptor 설정 중 get, set 함수 재정의를 통해 구독하고 있는 필드 값을 읽거나 쓸때 타이밍을 알수 있음
    간단히 말해서 eventListener 처럼 현재 어딘가에서 이 값을 읽고 있다, 다시 할당하고 있는지 타이밍을 알 수 있음

## 해당 값을 읽는 함수 저장하기

    computed 함수 한번 실행 전에 전역 변수에 현재 실행하는 함수 저장하고 함수 실행 시 Object.defineProperty 중 get 함수가 실행 되므로 get 함수 내부에서 금방 전역 변수에 저장된 함수를 다시 집합으로 저장
    ex) {a: [fn1, fn2], b: fn3}

## 데이터 변경

    데이터가 변경되면 Object.defineProperty 중 set 함수가 실행되므로 set 함수 내부에서 저장되었던 해당 필드를 쓰고있는 함수들 모조리 한번씩 실행
