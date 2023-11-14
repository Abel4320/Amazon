import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, Header, CheckOut, ProductPage, SignIn, Cart,Footer, CreateAcc, Payment,Orders } from './components';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const ConditionalRoute = ({ element, displayHeader,footer }) => {
  return (
    <body className=' '  >
      <div className='' >
          {displayHeader && <Header />}
      </div>
      {element}
      {footer && <Footer/>}
    </body>
  );
};
const promise=loadStripe('pk_test_51O0rPQKuvv7WFEVYd6xYg52TDuihRN6qYSdVQoKmPomc64sqQO0X9mVue8CkFoWkL6xIKEo1BS1PQwXlxTBEmrbV00US43FZH0')
const App = () => {

  return (
    <Router >
      <Routes >
        <Route
          exact
          path='/'
          element={<ConditionalRoute element={<HomePage />} displayHeader={true} footer={true} />}
        />
        <Route
          exact
          path='/product/:id'
          element={<ConditionalRoute element={<ProductPage />} displayHeader={true} footer={true} />}
        />
        <Route
          exact
          path='/cart'
          element={<ConditionalRoute element={<Cart />} displayHeader={true} footer={true}  />}
        />
        <Route
          exact
          path='/signin'
          element={<ConditionalRoute element={<SignIn/>} displayHeader={false} footer={false} />}
        />
        <Route
          exact
          path='/createacc'
          element={<ConditionalRoute element={<CreateAcc/>} displayHeader={false} footer={false} />}
        />
            <Route
          exact
          path='/orders'
          element={<ConditionalRoute element={<Orders/>} displayHeader={true} footer={true} />}
        />
         
      <Route
    path="/payment"
    element={(
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    )}
  />
      </Routes>  
    </Router>
  );
};
export default App;
