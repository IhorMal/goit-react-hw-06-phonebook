import { Component } from 'react'


class Filter extends Component {
    render() {
        const { filterContact, addFind, filter, dalet } = this.props;
        const filt = filterContact();
        return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" name="filter" value={filter} onChange={addFind} />
            {filter !== '' && (
                <ul>
                {filt.map(({ name, id, number }) => (
                    <li key={id}>
                        {name}: {number}
                        <button type='button' onClick={() => dalet(id)}>dalet</button>
                    </li>
                ))}
            </ul>
            )}

        </div>
    )
}
};

export {Filter}