import { useRef } from "react"
import { Button, Heading, Icon } from "@ui"
import {
  StyledModal,
  ModalContainer,
  ModalHeader,
  ModalClose,
  ModalBody,
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
        <ModalBody>
          <Component ref={formRef} data={data} onApply={onApply} />
        </ModalBody>
        <ModalFooter>
          {hasRemoveButton && (
            <ModalRemoveButton
              aria-label="Remove the address"
              style={{ opacity: areButtonsDisabled ? "0.5" : "1" }}
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
              style={{ opacity: areButtonsDisabled ? "0.5" : "1" }}
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
