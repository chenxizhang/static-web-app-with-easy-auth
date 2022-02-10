import ReactJson from 'react-json-view';
import { useState } from 'react';

function App() {

  const [user, setUserInfo] = useState();
  const [tasks, setTasks] = useState();



  return (
    <div>
      <button onClick={async () => {
        async function getUserInfo() {
          const response = await fetch('/.auth/me');
          const payload = await response.json();
          const { clientPrincipal } = payload;
          return clientPrincipal;
        }

        const user = await getUserInfo();
        setUserInfo(user);

      }}>获取用户信息</button>


      <button onClick={async () => {

        const result = await fetch({ url: 'api/tasks' });
        setTasks(result.body);

      }}>调用中间服务</button>


      <hr />
      {user && <ReactJson src={user} />}
      {tasks && <ReactJson src={tasks} />}
    </div>
  );
}

export default App;
