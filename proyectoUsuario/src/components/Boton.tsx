import React, { useState, useCallback } from 'react';

interface Customizo {
    id: string;
    label: string;
    iconSrcDefault: string;
    iconSrcActive?: string;
    defaultColor?: string;
    hoverColor?: string;
    textColor?: string;
    padding?: string;
    borderRadius?: string;
    onSelect?: (id: string) => void;
    isSelected?: boolean;
    className?: string;
    }

const Boton: React.FC<Customizo> = ({
    id,
    label,
    iconSrcDefault,
    iconSrcActive,
    defaultColor = 'transparent',
    hoverColor = 'blue',
    textColor = 'black',
    borderRadius = '5px',
    onSelect,
    isSelected = false,
    className = '',
    }) => {
    const [isHovering, setIsHovering] = useState(false);

    const buttonStyle = {
        backgroundColor: isHovering || isSelected ? hoverColor : defaultColor,
        color: isHovering || isSelected ? 'white' : textColor,
        padding: '12px 15px',
        borderRadius: borderRadius,
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease, font-weight 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '16px',
        fontWeight: isHovering || isSelected ? 'bold' : 'normal',
    };

    const iconStyle = {
        width: '20px',
        height: '20px',
        border: 'none',
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleClick = useCallback(() => {
        if (onSelect) {
        onSelect(id);
        }
    }, [id, onSelect]);

    return (
        <button style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className={className}>
        <img src={isHovering || isSelected ? iconSrcActive : iconSrcDefault} alt="" style={iconStyle} />
        {label}
        </button>
    );
};

export default Boton
