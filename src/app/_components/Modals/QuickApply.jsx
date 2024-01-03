'use client'
import { Fragment, useContext } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, Link} from '@nextui-org/react';
import { AppContext } from "@/app/_providers/AppContext";
import { renderJobDescription } from '@/app/_libs/contentful-rich-text'

export default function QuickApply() {
    const { isOpen, onOpenChange, quickApplyJobDetail } = useContext(AppContext)

    return (
        <Fragment>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex flex-col gap-1 text-title-primary font-black'>Aplicación rápida</ModalHeader>
                        <ModalBody>
                            <div className='space-y-4 pb-2'>
                                <div>
                                    <h5 className='text-title-primary text-lg font-bold'>Rol</h5>
                                    <p>{quickApplyJobDetail.fields.title}</p>
                                </div>
                                <div>
                                    <h5 className='text-title-primary text-lg font-bold'>Compañía</h5>
                                    <p>{quickApplyJobDetail.fields.company}</p>
                                </div>
                                <div>
                                    <h5 className='text-title-primary text-lg font-bold'>Rango salarial</h5>
                                    <p>
                                        {`$${quickApplyJobDetail.fields.minimumSalary} - $${quickApplyJobDetail.fields.maximumSalary}`}
                                    </p>
                                </div>
                                <div>
                                    <h5 className='text-title-primary text-lg font-bold'>Descripción</h5>
                                    <div className='space-y-2 text-sm xl:text-base'>
                                        { renderJobDescription(quickApplyJobDetail.fields.description) }
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button onPress={onClose} color='danger' className='font-medium'>
                                Cerrar
                            </Button>
                            <Button href={`mailto:${quickApplyJobDetail.fields.email}?subject=${quickApplyJobDetail.fields.title}%20-%20Enjoyb&body=Is%20authorized%20to%20work%20in%20USA?%20Yes`} as={Link} className='bg-button-primary text-white font-medium'>
                                Enviar aplicación
                            </Button>
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </Fragment>
    )
}