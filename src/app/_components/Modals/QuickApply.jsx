'use client'
import { Fragment, useContext } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, Button, Input} from '@nextui-org/react';
import { AppContext } from "@/app/_providers/AppContext";

export default function QuickApply() {
    const { isOpen, onOpenChange } = useContext(AppContext)

    return (
        <Fragment>
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
                                <div className='flex flex-col gap-4'>
                                    <Button className='font-medium w-1/2 mx-auto' color='success'>
                                        Login
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