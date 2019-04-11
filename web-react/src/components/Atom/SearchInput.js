/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import * as colors from '../../theme/colors'


const inputStyle = {
    width: '100%',
    border: 'none',
    height: '100%',
    outline: 'none',
    textIndent: '8px',
    fontSize: '16px',
}

const SearchInput = ({ onSubmit, onChange, width, height }) => {

    const handleSubmit = (e) => {
        if (e.key === 'Enter' && onSubmit) onSubmit(e.target.value)
    }

    const handleChange = ({target: { value }}) => {
        if (onChange) onChange(value)
    }
  
    return (
      <Container width={width} height={height}>
        <i className="fas fa-search"></i>
        <input css={inputStyle} onChange={handleChange} onKeyDown={handleSubmit} />      
      </Container>
    );
}

export default SearchInput

const Container = styled.div`
    width: ${p => p.width || '200px'};
    height: ${p => p.height || '30px'};
    padding: 4px;
    display: flex;
    border: 1px solid rgb(214, 223, 223);
    border-radius: 4px;
    align-items: center;
`