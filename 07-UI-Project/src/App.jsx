import Section1 from './components/section1/Section1';
const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, voluptatem dolorum repudiandae quia consequuntur fuga?',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661765161780-7b7a57d6845c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, voluptatem dolorum repudiandae quia consequuntur fuga?',
      tag: 'UnderServed',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661666962678-faa6afa3d796?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, voluptatem dolorum repudiandae quia consequuntur fuga?',
      tag: 'Underbanked',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, voluptatem dolorum repudiandae quia consequuntur fuga?',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, voluptatem dolorum repudiandae quia consequuntur fuga?',
      tag: 'UnderServed',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, voluptatem dolorum repudiandae quia consequuntur fuga?',
      tag: 'Underbanked',
    },
  ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
