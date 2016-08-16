var Cell = React.createClass({   
    render: function () {
        var data = this.props.data;
        return <div className="cell">{this.props.data}</div>
    }
});
var Row = React.createClass({
    render: function () {
        return (<div className="row">
          <Cell data={this.props.data.name} />
          <Cell data={this.props.data.department} />
          <Cell data={this.props.data.phone} />
        </div>);
    }
});
var Grid = React.createClass({
    render: function () {
        var headerRow = <div className="row">
            <Cell data="Name" />
            <Cell data="Department" />
            <Cell data="Phone" />
          </div>;
        var rows = this.props.data.map(function (rowData, index) {
            return <Row key={index} data={rowData}>Row</Row>;
        });
        return <div className="table table-bordered">{headerRow}{rows}</div>;
    }
});