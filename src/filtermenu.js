import {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class FilterMenu extends Component {
    /* defines menu of sort, filter by subject, and filter by format*/

    render() { return (
        <div className="menu">
            {/* sort dropdown */}
            <FormControl className="dropdown">
                <InputLabel>sort by: </InputLabel>
                <Select id="sorter" onChange={this.props.handleSort} value={this.props.sort}>
                    <MenuItem value="featured"><em>featured</em></MenuItem>
                    <MenuItem value="price">price</MenuItem>
                </Select>
            </FormControl>

            <span>filter by: </span>
            {/* filter by subject dropdown */}
            <FormControl className="dropdown">
                <InputLabel>subject</InputLabel>
                <Select id="filterer1" onChange={this.props.handleFilterSubject} value={this.props.subject}>
                    <MenuItem value="all"><em>all</em></MenuItem>
                    <MenuItem value="nature">nature</MenuItem>
                    <MenuItem value="architecture">architecture</MenuItem>
                </Select>
            </FormControl>

            {/* filter by format dropdown */}
            <FormControl className="dropdown">
                <InputLabel>format</InputLabel>
                <Select id="filterer2" onChange={this.props.handleFilterFormat} value={this.props.format}>
                    <MenuItem value="all"><em>all</em></MenuItem>
                    <MenuItem value="digital photo">digital</MenuItem>
                    <MenuItem value="print">print</MenuItem>
                    <MenuItem value="limited edition print">limited edition print</MenuItem>
                </Select>
            </FormControl>
        </div>
    )}
}

export default FilterMenu