import { FormEvent, Fragment, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

import { useOverlay } from '@/hooks/useOverlay'

import { Button } from '@/ui/Button/Button'

const Modal = dynamic(
  () => import('@/ui/Modal/Modal').then((mod) => mod.Modal),
  { ssr: false },
)

import { Heading } from '@/ui/Heading/Heading'
import { Icon } from '@/ui/Icon/Icon'
import { Input } from '@/ui/Input/Input'

import styles from './PopularAuctionsActionButtons.module.css'
import { newAudio } from '@/lib/audio'

const success = {
  open: {
    clipPath: `circle(100% at 50% 50%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(0px at 50% 50%)',
    transition: {
      type: 'spring',
    },
  },
}

export function PopularAuctionsPlaceNewBid({
  highestBid,
}: {
  highestBid: string
}) {
  const { isOpen, setIsOpen } = useOverlay()
  const [isSuccess, setIsSuccess] = useState(false)

  function confirmBid(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newBid = formData.get('bid') as string
    if (newBid === '') return
    setIsSuccess(true)
    newAudio('/audio/success.mp3').play()
  }

  function closeModal() {
    setIsOpen(false)
    setIsSuccess(false)
  }

  return (
    <div className={styles.auctionButtons}>
      {isOpen ? (
        <Modal closeModal={closeModal}>
          <motion.form
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            onSubmit={confirmBid}
          >
            {isSuccess ? (
              <motion.div
                className={styles.success}
                initial={'closed'}
                animate={isSuccess ? 'open' : 'closed'}
                variants={success}
              >
                <div className={styles.checkmarkIconWrapper}>
                  <svg
                    className={styles.checkmark}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className={styles.checkmarkCircle}
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className={styles.checkmarkCheck}
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>

                <Heading as="h3" size="2xl">
                  Bid placed successfully!
                </Heading>

                <Button
                  intent="primary"
                  className={styles.finishButton}
                  onClick={closeModal}
                  type="button"
                >
                  Close
                </Button>
              </motion.div>
            ) : (
              <Fragment>
                <Button
                  intent="icon"
                  onClick={closeModal}
                  className={styles.closeIcon}
                  title="Close modal"
                  type="button"
                >
                  <Icon name="closeCircle" size="medium" />
                </Button>
                <Heading as="h3" size="2xl">
                  Place a new bid
                </Heading>
                <p className={styles.modalText}>
                  The current bid is {highestBid}
                </p>
                <Input type="number" name="bid" required />
                <div className={styles.modalButtons}>
                  <Button intent="accent">Confirm</Button>
                  <Button onClick={closeModal} type="button">
                    Cancel
                  </Button>
                </div>
              </Fragment>
            )}
          </motion.form>
        </Modal>
      ) : null}
      <Button intent="accent" onClick={() => setIsOpen(true)}>
        Place a bid
      </Button>
      <Button intent="primary">View item</Button>
    </div>
  )
}
