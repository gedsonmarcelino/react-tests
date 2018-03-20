import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Pessoas = ({ data: { pessoas, refetch } }) => {
  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>{pessoas && pessoas.map(pessoa => <li key={pessoa.id}>{pessoa.name}</li>)}</ul>
    </div>
  );
}

// export default graphql(gql`
// query FetchPessoas {
//   pessoas( cpf: "12345678901" ) {
//     id,
//     nome
//   }
// }
// `)(Pessoas);

export default Pessoas;