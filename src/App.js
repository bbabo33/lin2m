import Main from './component/class_base/main';
// npm install node-sass 필요
import './scss/_global.scss';

/**
 * 구성
 * 
 * 1. 메인 컴포넌트이며 이벤트 핸들링은 최소화 한 상위 개념은 class component로 class_base에 존재
 *    메인 컴포넌트의 하위 컴포넌트는 class가 아닌 function component로 생성
 * 
 *    이유: 
 *    - function component는 useEffect등을 쓰더라도 객체를 덮어쓴다.
 *    - class component는 setStatus를 사용하거나 this 바인딩의 불편함이 있지만,
 *      status가 병합되는 과정을 거치면서 데이터가 유실되거나 하는 문제점이 적을거라 판단
 * 
 * 2. path alias
 *    
 *      
 * @returns 
 */
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
