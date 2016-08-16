var Cell = React.createClass({
    render: function () {
        return <td title={this.props.text }>{this.props.text}</td>
    }
});
var Line = React.createClass({
    render: function () {
        return (<tr><Cell text={this.props.index } /><Cell text={this.props.item.name } /><Cell text={this.props.item.department } /><Cell text={this.props.item.phone } /></tr>)
    }
});
var Rows = React.createClass({
    render: function () {
        var rows = this.props.items.map(function (rowData, index) {
            return <Line key={index} index={index} item={rowData } />;
        });

        return (<tbody>{rows}</tbody>);
    }
});
var Table = React.createClass({
    render: function () {
        var head = <thead><tr><td>#</td><td>Name</td><td>Department</td><td>Phone</td></tr></thead>;

        var body = <Rows items={this.props.items} />;

        return <table className="table table-bordered table-striped">{head}{body}</table>;
    }
});