import React, { Fragment } from 'react';
import '@/scss/component/class_base/main.scss';
import { LinList } from '@/component/function_base/linList';
import { Loading } from '@/component/global/loading';

export default class main extends React.Component {

	constructor() {
		super();
		this.state = {
			loading: true,
		}
	}

	checkLoading() {
		if (this.state.loading) {
			return 'loading active';
		} else {
			return 'loading';
		}
	}

	changeLoading(val) {
		this.setState({ loading: val||false });
	}

	render() {
		return (
			<Fragment>
				{/* <div className="main"> */}
				<Loading loading={this.state.loading} />
				<div className="main">
					<div className="main--header"></div>
					<div className="main--content">
						<LinList loading={this.state.loading} changeLoading={this.changeLoading.bind(this)} />
					</div>
					<div className="main--footer"></div>
				</div>
			</Fragment>
		);
	}
}