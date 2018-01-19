export default () =>
  <div>
    <div style={{ color: "orange"}}>Hi There</div>
    <p>Welcome to Next.JS!</p>
    <style jsx>{`
      p {
        color: brown;
      }
      div {
        background: teal;
      }
      @media (max-width: 600px) {
        div {
          background: orange;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background-size: cover;
        background: url("../static/Background.png");
      }
    `}</style>
  </div>
