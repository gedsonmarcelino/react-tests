import React from 'react';

const withLoading = (fetch) => (WrappedComponent) => {
	return class WithLoading extends React.Component {
		state = {
			loading: true,
			items: []
		};

		componentDidMount() {
			fetch().then((items) => this.setState({ items, loading: false })).catch((err) => console.log(err));
		}

		render() {
			if (this.state.loading === true) return <p>Loading...</p>;
			else
				return (
					<WrappedComponent items={this.state.items} {...this.props}>
						{this.props.children}
					</WrappedComponent>
				);
		}
	};
};

export default withLoading;
