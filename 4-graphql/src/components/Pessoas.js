import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const Pessoas = ({data: {pessoas, refetch, loading}}) => {
  if (loading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  return (
    <div>
      <button onClick={ () => refetch() }>Reload</button>
      <ul>{pessoas && pessoas.map(pessoa => <li key={pessoa.id}>{pessoa.nome}</li> )}</ul>
    </div>
  );
}

export default graphql(gql`
query FetchPessoas {
  pessoas( cpf: "12345678901" ) {
    id,
    nome
  }
}
`)(Pessoas);