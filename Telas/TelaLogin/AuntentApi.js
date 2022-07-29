import React from "react";
import { useState } from "react";
import { Alert } from "react-native";
import api from '../scr/services/Api';

export default function AutentApi(email, password, navigation) {

    const [formatInvalid, setFormatInvalid] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [usuarioInvalido, setUserInvalid] = useState(false);

    const AutentApi = async () => {
        await api.post("/oauth/token", {
            'grant_type': 'password',
            'email': email,
            'password': password,
            'client_id': '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
            'client_secret': '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0'
        }, {validateStatus: (status) => status === 200})
            .then((res) => {
                Alert.alert('SUCESSO!', 'Realizando Login')
                api.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Humores' }]
                });
                
            })
            .catch(err => {
                Alert.alert('Ops!', 'Email ou Senha incorretos!!');
                setUserInvalid(true);
                setTimeout(() => setUserInvalid(false), 3000);
            }).finally(() => setIsLoad(false))

    }

    const identEmail = /^[\w.!#$%&'*+\/=?^_`{|}~-]+@\w(?:\w{0,61}\w)?(?:\.\w(?:[\w-]{0,61}\w)?)*$/gi;
    const identPass = /.{6,}/g

    const entrar = () => {

        if (identEmail.test(email) && identPass.test(password)) {
            setIsLoad(true)
            AutentApi()

        } else {
            setFormatInvalid(true);
            setTimeout(() => setFormatInvalid(false), 3000);
        }
    }

    return { entrar }

}
