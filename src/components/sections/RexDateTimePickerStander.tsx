import './index.css'
import {useState} from "react";
import {input} from "sucrase/dist/types/parser/traverser/base";

interface RexInputProps {
    label?: string;
    labelSize?: string;
    labelColor?: string;
    placeholder?: string;
    labelInputGap?: string;
    labelBg?: string;


    placeholderColor?: string;
    placeholderSize?: string;


    borderRadius?: string;
    borderSize?: string;
    borderColor?: string;
    borderStyle?: string;
    focusColor?: string;
    focusShadow?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    fontColor?: string;
    px?: string;
    py?: string;
    background?: string;


    getValue: (item: any) => any;
    disableInput?: boolean;
    defaultValue?: string;
    showLabel?: boolean;
    type?: 'text' | 'email' | 'password' | 'number';
    labelPosition?: 'top' | 'border' | 'center';
    animationLabel?: boolean;
}


const RexInput = ({
                      label = 'Name :',
                      labelBg = 'white',
                      placeholder = 'Placeholder ...',
                      labelColor = 'dark',
                      labelSize = '20px',
                      labelInputGap = '10px',
                      showLabel = true,

                      placeholderColor = 'white',
                      placeholderSize = '16px',

                      borderRadius = '5px',
                      borderSize = '1px',
                      borderColor = '#2196f3',
                      borderStyle = 'solid',
                      focusColor = 'red',
                      focusShadow = '0 0 5px rgba(0, 0, 255, 0.5)',
                      width = '400px',
                      height = 'fit-content',
                      fontSize = '16px',
                      fontColor = 'red',
                      px = '10px',
                      py = '10px',
                      background = 'transparent',

                      getValue,
                      disableInput = false,
                      type = 'text',
                      defaultValue = 'dark',
                      labelPosition = 'border',
                      animationLabel = true,
                  }: RexInputProps) => {



    const [showPlaceholder, setShowPlaceholder] = useState(!defaultValue );



    const handleLabelPosition = ():object => {
        let defaultStyle = {
            display: showLabel ? 'block' : 'none',
            color: labelColor,
            fontSize: labelSize,
            background: labelBg,
        }
       switch (labelPosition) {
              case 'top':
                return defaultStyle
              case 'border':
                return {
                     ...defaultStyle,
                    position:'absolute',
                    left: '5px',
                    top:  '-50%',
                    transition: 'transform 0.2s ease-in-out',
                    background: animationLabel && !showPlaceholder? 'transparent' : labelBg,
                    transform: animationLabel && !showPlaceholder? 'translate(0%, -50%)' : 'translate(0%, 20%)',


                }
              case 'center':
                return {
                     ...defaultStyle,
                     position: 'absolute',
                     top: animationLabel && !showPlaceholder? '0px' : '50%',
                     left: '5px',
                    background: animationLabel && !showPlaceholder? 'transparent' : labelBg,
                    transform: animationLabel && !showPlaceholder? 'translate(0%, -130%)' : 'translate(0%, -50%)',
                     display: animationLabel? "" :showPlaceholder ? 'block' : 'none',
                    transition: 'transform 0.2s ease-in-out',
                }
              default:
                return defaultStyle
       }
    }



    return (
        <div className={'contInput'} style={{gap: labelPosition == 'top' ? labelInputGap : ''}}>
            <div className={'containerLabel'}
                 style={handleLabelPosition()}>
                <p className={'rexLabel'}>{label}</p>
            </div>
            <div className={'inputContainer'}>
                <input type={type} className={'rexInput'} disabled={disableInput}
                       style={{
                           borderRadius: borderRadius,
                           border: borderSize + ' ' + borderStyle + ' ' + borderColor,
                           background: background,
                           width: width,
                           height: height,
                           fontSize: fontSize,
                           color: fontColor,
                           padding: py + ' ' + px,
                       }}
                       onFocus={(e) => {
                           e.target.style.outlineColor = focusColor;
                           e.target.style.boxShadow = focusShadow;
                       }}
                       onChange={(e)=>{
                           getValue(e.target.value? e.target.value : defaultValue)
                           if(e.target.value) {
                                 setShowPlaceholder(false)
                           }else {
                               setShowPlaceholder(true)
                           }
                       }}
                       defaultValue={defaultValue}

                />
                <span className={'rexPlaceholder'}
                      style={{
                          color: placeholderColor,
                          fontSize: placeholderSize,
                          display: !showPlaceholder || labelPosition == 'center' ? 'none' : 'block',
                      }}
                >{placeholder}</span>
            </div>
        </div>
    )
}

export default RexInput