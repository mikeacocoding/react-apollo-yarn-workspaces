import { Field, Form, Formik } from 'formik';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { createBookSchema } from '@monorepos/common';
import { Input } from './Input';

const mutation = gql`
  mutation CreateBook($book: CreateBookInput!) {
    createBook(book: $book)
  }
`;

function App() {
  return (
    <Mutation mutation={mutation}>
      {createBook => (
        <Formik
          validationSchema={createBookSchema}
          initialValues={{ title: '', pages: 2, author: '' }}
          onSubmit={values => {
            createBook({ variables: { book: values } });
          }}
        >
          {() => (
            <Form>
              <Field name='title' component={Input}></Field>
              <Field name='pages' component={Input}></Field>
              <Field name='author' component={Input}></Field>
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      )}
    </Mutation>
  );
}

export default App;
