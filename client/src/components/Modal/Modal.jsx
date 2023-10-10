import { useRef } from "react"
import { Button, Heading, Icon } from "@ui"
import {
  StyledModal,
  ModalContainer,
  ModalHeader,
  ModalClose,
  ModalFooter,
  ModalRemoveButton,
} from "./Modal.styled"

export function Modal({
  api,
  data,
  title,
  Component,
  hasApplyButton,
  hasCancelButton,
  hasRemoveButton,
  areButtonsDisabled,
  onApply,
  onRemove,
}) {
  const formRef = useRef(null)

  return (
    <StyledModal onClick={api.close}>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <Heading $size="md">{title}</Heading>
          <ModalClose aria-label="Close the modal window" onClick={api.close}>
            <Icon aria-hidden="true">close</Icon>
          </ModalClose>
        </ModalHeader>
        <Component
          data={data}
          onApply={onApply}
          {...(hasApplyButton ? { ref: formRef } : {})}
        />
        <ModalFooter>
          {hasRemoveButton && (
            <ModalRemoveButton
              aria-label="Remove the address"
              disabled={areButtonsDisabled}
              onClick={() => onRemove(data)}
            >
              <Icon $size="1.2rem" $color="red">
                delete
              </Icon>
            </ModalRemoveButton>
          )}
          {hasCancelButton && (
            <Button $type="secondary" onClick={api.close}>
              Cancel
            </Button>
          )}
          {hasApplyButton && (
            <Button
              $type="primary"
              type="button"
              disabled={areButtonsDisabled}
              onClick={() => formRef.current.requestSubmit()}
            >
              Apply
            </Button>
          )}
        </ModalFooter>
      </ModalContainer>
    </StyledModal>
  )
}
