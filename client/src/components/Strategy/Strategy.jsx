import { useState, Children, cloneElement, useRef, useEffect } from "react"
import { Button, Heading, Icon } from "@ui"
import {
  StrategyNav,
  StrategyProgress,
  StrategyTitle,
  StrategyWrapper,
  StyledStrategy,
} from "./Strategy.styled"

export function Strategy({
  defaultStage,
  setPrevStage,
  setNextStage,
  hasProgress,
  hasNavigation,
  children,
}) {
  const [stage, setStage] = useState(0)
  const [data, setData] = useState({})
  const [buttonsDisabled, setButtonsDisabled] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    console.log(stage)
  }, [stage])

  const changeStage = (i) => {
    if (i > stage) return
    setStage(i)
  }

  const childrenArray = Children.toArray(children)
  const currentElement = childrenArray[defaultStage ?? stage]

  const setPrevStageFn = setPrevStage || (() => setStage(stage - 1))
  const setNextStageFn = setNextStage || (() => setStage(stage + 1))

  return (
    <StyledStrategy>
      {hasProgress && (
        <StrategyProgress>
          {childrenArray.map((_, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Scene ${i}`}
              className={i <= stage ? "active" : ""}
              onClick={() => changeStage(i)}
            />
          ))}
        </StrategyProgress>
      )}
      <StrategyTitle $size="lg">{currentElement.props.title}</StrategyTitle>
      <StrategyWrapper>
        {cloneElement(currentElement, {
          data,
          addData: (obj) => setData({ ...data, ...obj }),
          setButtonsDisabled,
          setPrevStage: setPrevStageFn,
          setNextStage: setNextStageFn,
          ...(currentElement.props.customNextBtnHandler
            ? { ref: elementRef }
            : {}),
        })}
      </StrategyWrapper>
      {hasNavigation && (
        <StrategyNav>
          <Button
            $type="secondary"
            disabled={buttonsDisabled}
            onClick={setPrevStageFn}
          >
            <Icon $size="2.2rem">chevron_left</Icon>
          </Button>
          <Button
            $type="secondary"
            disabled={buttonsDisabled}
            onClick={
              currentElement.props.customNextBtnHandler
                ? () => elementRef.current.customNextBtnHandler()
                : setNextStageFn
            }
          >
            <Icon $size="2.2rem">chevron_right</Icon>
          </Button>
        </StrategyNav>
      )}
    </StyledStrategy>
  )
}
