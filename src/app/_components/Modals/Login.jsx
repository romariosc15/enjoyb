'use client'
import { Fragment } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from '@nextui-org/react';
import { MdLogin } from 'react-icons/md';

export default function LoginModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <Fragment>
            <Button onPress={onOpen} className='bg-button-primary text-white'>
                <MdLogin size={20} /> Sign in
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex flex-col gap-1 text-title-primary'>Sign in</ModalHeader>
                        <ModalBody>
                            <div className='space-y-4 pb-2'>
                                <div>
                                    <label htmlFor='email'></label>
                                    <Input
                                        classNames={{
                                            inputWrapper: 'bg-white border',
                                        }}
                                        id='email'
                                        type='email'
                                        label='Email' 
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email'></label>
                                    <Input
                                        classNames={{
                                            inputWrapper: 'bg-white border',
                                        }}
                                        id='password'
                                        type='password'
                                        label='Password' 
                                    />
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <Button className='font-medium w-1/3' color='success'>
                                        Enter
                                    </Button>
                                    <Button className='font-medium w-1/3' color='danger'>
                                        Google
                                    </Button>
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </Fragment>
    )
}