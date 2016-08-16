var HCell = React.createClass({
    render: function () {
        return <th title={this.props.text }>{this.props.text}</th>
    }
});
var BCell = React.createClass({
    render: function () {
        return <td title={this.props.text }>{this.props.text}</td>
    }
});
var Line = React.createClass({
    render: function () {
        return (<tr><BCell text={this.props.index } /><BCell text={this.props.item.name } /><BCell text={this.props.item.department } /><BCell text={this.props.item.phone } /></tr>)
    }
});
var Table = React.createClass({
    render: function () {
        var head = <thead><tr><HCell text="#" /><HCell text="Name" /><HCell text="Department" /><HCell text="Phone" /></tr></thead>;
        var rows = this.props.items.map(function (rowData, index) {
            return <Line key={index} index={index} item={rowData } />;
        });
        var body = <tbody>{rows}</tbody>;

        return <table className="table table-bordered table-striped">{head}{body}</table>;
    }
});