# <img src="https://user-images.githubusercontent.com/78714820/148996218-1fbfd13b-f5e2-48e9-874e-3b38c2106f7e.png" width="180">

<br>

### 서로 다른 색의 우리가 만나는 공간, 팀블 💜

&#35; 우리_팀블하자!

<img width="2104" alt="KakaoTalk_20220107_191904466" src="https://user-images.githubusercontent.com/78714820/148947258-37724c60-9cf7-48a5-8e33-829df9073638.png">

>22.01.02 ~ 22.01.22 - SOPT 29th APPJAM


 
<br>
<br>

## <img src="https://user-images.githubusercontent.com/78714820/148998323-df8997b1-ec90-433a-bc2f-340adcd31984.png" width="25"> Developers
| 박건영 | 정세연 | 김연이 |
| :-----: | :-----: | :-----: |
| [dingding-21](https://github.com/dingding-21) | [MoonGyu1](https://github.com/MoonGyu1) | [YounYi](https://github.com/YounYi) |

<br>

## <img src="https://user-images.githubusercontent.com/78714820/148998323-df8997b1-ec90-433a-bc2f-340adcd31984.png" width="25"> Role
| 이름 | 역할 |
| :-----: | :-----: |
|  박건영 | 초기 환경 세팅, API 추상화, 수정상황 대응 |
|  정세연 | 컴포넌트 구현, 레이아웃 및 API 연결, 수정사항 대응 |
|  김연이 | 컴포넌트 구현, 레이아웃 및 API 연결, 수정사항 대응 |

<br>

## <img src="https://user-images.githubusercontent.com/78714820/148998323-df8997b1-ec90-433a-bc2f-340adcd31984.png" width="25"> IA 
![워너비팀 IA](https://user-images.githubusercontent.com/78714820/148944831-7cca8c67-8afc-4135-8998-acecf48df0c1.png)

<br>


## <img src="https://user-images.githubusercontent.com/78714820/148998323-df8997b1-ec90-433a-bc2f-340adcd31984.png" width="25"> Git Workflow
### `main` ← `develop` ← `feat/issue`

<details>
<summary>Click!</summary>
<div markdown="1">
<br>
main은 모든 작업이 끝난 후 develop에서 Merge 시킨다.

—————————————————————————

-   `main` - 초기 세팅 존재 
    
-   `develop` - local 작업 완료 후 Merge 브랜치
    
-   `feat/issue` - 각자의 기능 추가 브랜치
    
    ex) `feat/atom`
    

—————————————————————————

1.  각 기능이 추가될 때마다 Issue 및 Branch 생성
2.  `local - feat/atom` 에서 각자 기능 작업
3.  작업 완료 후 `remote - develop` 에 Pull Request
4.  코드 리뷰 후 Confirm 받고 Merge
5.  `remote - develop` 에 Merge 될 때 마다 **모든 팀원 `remote - develop pull`** 받아 최신 상태 유지

</div>
</details>

<br>

## <img src="https://user-images.githubusercontent.com/78714820/148998323-df8997b1-ec90-433a-bc2f-340adcd31984.png" width="25"> Commit Message Convention

<details>
<summary>Click!</summary>
<div markdown="1">
<br>
  
  | 태그 | 설명 |  
  | :-----: | :-----: |
  | [INIT] | 작업 세팅 커밋 |
  | [CHORE] | 코드 수정, 내부 파일 수정 |
  | [FEAT] | 새로운 기능 구현 |
  | [STYLE] | 기능에 영향을 주지 않는 커밋, 코드 순서 등의 포맷에 관한 커밋 |
  | [HOTFIX] | issue나, QA에서 급한 버그 수정에 사용 |
  | [FIX] | 버그, 오류 해결 |
  | [DOCS] | README나 WIKI 등의 문서 개정 |
  | [RENAME] | 파일 이름 변경이 있을 때 사용 |
  | [REFACTOR] | 전면 수정이 있을 때 사용 |
  | [MERGE] | 다른 브랜치를 Merge 할 때 사용 |
  | [BUILD] | 빌드 관련 파일 수정 |
  
</div>
</details>

<br>

## <img src="https://user-images.githubusercontent.com/78714820/148998323-df8997b1-ec90-433a-bc2f-340adcd31984.png" width="25"> Coding Convention

<details>
<summary>Click!</summary>
<div markdown="1">
<br>
  
### 명명규칙(Naming Conventions)

---

1. 이름으로부터 의도가 읽혀질 수 있게 쓴다.
- ex)
    
    ```jsx
    // bad
    function q() {
      // ...stuff...
    }
    
    // good
    function query() {
      // ..stuff..
    }
    ```
  <br>
    
2. 오브젝트, 함수, 그리고 인스턴스에는 `camelCase`를 사용한다.
- ex)
    
    ```jsx
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}
    
    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```
  <br>
    
3. styled-components 사용시 첫 번째 wrapper의 이름은 컴포넌트 이름과 동일하게 작성한다.
- ex)
    
    ```jsx
    // bad
    function CopyModal(options) {
      return <StyledModal />
    }
    
    const StyledModal = styled.div``
    
    // good
    function CopyModal(options) {
      return <StyledCopyModal />
    }
    
    const StyledCopyModal = styled.div``
    ```
  <br>
    
4. 함수 이름은 동사 - 명사 형태로 작성한다.
    
    ex) `postUserInformation( )`
  <br>
    
5. 약어 사용은 최대한 지양한다.
  <br>

### 참조(References)

---

1. 모든 참조는 `const`를 사용하고, `var`는 사용하지 않는다.
2. 참조를 재할당 해야한다면 `var`대신 `let`을 사용한다.
    
    이때, `const`와 `let`은 **블록스코프**임을 유의
    
<br>
  
### 블록(Blocks)

---

1. 복수행의 블록에는 중괄호({})를 사용한다.
- ex)
    
    ```jsx
    // bad
    if (test)
      return false;
    
    // good
    if (test) return false;
    
    // good
    if (test) {
      return false;
    }
    
    // bad
    function() { return false; }
    
    // good
    function() {
      return false;
    }
    ```
  <br>
    
2. 복수행 블록의 `if` 와 `else` 를 이용하는 경우 `else` 는 `if` 블록 끝의 중괄호(})와 같은 행에 위치시킨다.
- ex)
    
    ```jsx
    // bad
    if (test) {
      thing1();
      thing2();
    }
    else {
      thing3();
    }
    
    // good
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    ```
  <br>

### 코멘트(Comments)

---

1. 복수형의 코멘트는 `/** ... */` 를 사용한다.
- ex)
    
    ```jsx
    // good
    /**
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {
    
      // ...stuff...
    
      return element;
    }
    ```
  <br>
    
2. 단일행의 코멘트에는 `//` 을 사용하고 코멘트를 추가하고 싶은 코드의 상부에 배치한다. 그리고 코멘트의 앞에 빈행을 넣는다.
- ex)
    
    ```jsx
    // bad
    const active = true;  // is current tab
    
    // good
    // is current tab
    const active = true;
    
    // good
    function getType() {
      console.log('fetching type...');
    
      // set the default type to 'no type'
      const type = this._type || 'no type';
    
      return type;
    }
    ```
    <br>

### 공백(Whitespace)

---

1. 주요 중괄호({}) 앞에는 스페이스 1개를 넣는다.
- ex)
    
    ```jsx
    // bad
    function test(){
      console.log('test');
    }
    
    // good
    function test() {
      console.log('test');
    }
    ```
  <br>
    
2. 제어구문 (`if` 문이나 `while` 문 등) 의 소괄호 (()) 앞에는 스페이스를 1개 넣고 함수 선언이나 함수 호출시 인수 리스트의 앞에는 스페이스를 넣지 않는다.
- ex)
    
    ```jsx
    // bad
    if(isJedi) {
      fight ();
    }
    
    // good
    if (isJedi) {
      fight();
    }
    
    // bad
    function fight () {
      console.log ('Swooosh!');
    }
    
    // good
    function fight() {
      console.log('Swooosh!');
    }
    ```
  <br>
    
3. 연산자 사이에는 스페이스를 넣는다.
- ex)
    
    ```jsx
    // bad
    const x=y+5;
    
    // good
    const x = y + 5;
    ```
  <br>

### 콤마(Commas)

---

1. 선두의 콤마 **BAD**
- ex)
    
    ```jsx
    // bad
    const story = [
        once
      , upon
      , aTime
    ];
    
    // good
    const story = [
      once,
      upon,
      aTime,
    ];
    ```
  <br>
    
2. 끝의 콤마 **GOOD**
- ex)
    
    ```jsx
    // bad
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully'
    };
    
    // good
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully',
    };
    ```
  <br>
    

### 세미콜론(Seminolons)

---

1. 세미콜론을 사용한다.

- ex)
    
    ```jsx
    // bad
    (function() {
      const name = 'Skywalker'
      return name
    })()
    
    // good
    (() => {
      const name = 'Skywalker';
      return name;
    })();
    ```
  <br>
    

### 문자열(Strings)

---

1. 문자열에는 싱크쿼트 `''` 를 사용한다.
  - ex)

      ```jsx
      // bad
      const name = "Capt. Janeway";

      // good
      const name = 'Capt. Janeway';
      ```
  <br>
        
2. 프로그램에서 문자열을 생성하는 경우는 문자열 연결이 아닌 `template strings`를 이용한다.
  - ex)

      ```jsx
      // bad
      function sayHi(name) {
        return 'How are you, ' + name + '?';
      }

      // bad
      function sayHi(name) {
        return ['How are you, ', name, '?'].join();
      }

      // good
      function sayHi(name) {
        return `How are you, ${name}?`;
      }
      ```
      <br>

### 함수(Functions)

---

1. 콜백 함수는 화살표 함수를 사용한다.
  - ex)

      ```jsx
      var arr1 = [1, 2, 3];
      var pow1 = arr.map(function (x) { // ES5 Not Good
        return x * x;
      });

      const arr2 = [1, 2, 3];
      const pow2 = arr.map(x => x * x); // ES6 Good
      ```
<br>
        
2. 그 외에는 함수 선언을 이용한다.
  - ex)

      ```jsx
      // bad
      const foo = function () {
      };

      // good
      function foo() {
      }
      ```
<br>
        

### 조건식과 등가식(Comparison Operators & Equality)

---

1. `==` 이나 `!=` 보다 `===` 와 `!==` 을 사용한다.
  
  <br>
  
2. 단축형을 사용한다.
  - ex)

      ```jsx
      // bad
      if (name !== '') {
        // ...stuff...
      }

      // good
      if (name) {
        // ...stuff...
      }

      // bad
      if (collection.length > 0) {
        // ...stuff...
      }

      // good
      if (collection.length) {
        // ...stuff...
      }
      ```
<br>
        
3. 비동기 함수를 사용할 때 `Promise`함수의 사용은 지양하고 `async`, `await`를 쓰도록 한다.
<br>
</div>
</details>

<br>

## <img src="https://user-images.githubusercontent.com/78714820/148998323-df8997b1-ec90-433a-bc2f-340adcd31984.png" width="25"> Foldering
```markdown
|-📋 .gitignore
|-📁 .storybook
|-📁 styles_
|-📁 utils_
|-📁 pages_
|-📁 components_
               |- 📁 atom_
               |         |- 📁 button_
               |                     |- 📋 Button.tsx
               |                     |- 📋 Button.stories.tsx
               |
               |- 📁 molecule_
               |             |- 📁 entryField_
               |                             |- 📋 EntryField.tsx
               |                             |- 📋 EntryField.stories.t
               |- 📁 organism_
               |             |- 📁 recruitPostion_
               |                                  |- 📋 RecruitPostion.tsx
               |                                  |- 📋 RecruitPostion.stories.tsx

```

<br>
