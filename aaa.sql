PGDMP         8                {         
   cakeorders    15.3    15.3 &    !           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            "           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            #           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            $           1262    29645 
   cakeorders    DATABASE     �   CREATE DATABASE cakeorders WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United Kingdom.1252';
    DROP DATABASE cakeorders;
                postgres    false            �            1259    29928    clients    TABLE     :  CREATE TABLE public.clients (
    id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    address character varying(255),
    contact_number bigint,
    email character varying(255),
    name character varying(255),
    orders_id bigint
);
    DROP TABLE public.clients;
       public         heap    postgres    false            �            1259    29927    clients_id_seq    SEQUENCE     w   CREATE SEQUENCE public.clients_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public          postgres    false    215            %           0    0    clients_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
          public          postgres    false    214            �            1259    29937    delivery    TABLE     l  CREATE TABLE public.delivery (
    id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    receiver_address character varying(255),
    receiver_contact_number bigint,
    receiver_email character varying(255),
    receiver_name character varying(255),
    status character varying(255)
);
    DROP TABLE public.delivery;
       public         heap    postgres    false            �            1259    29936    delivery_id_seq    SEQUENCE     x   CREATE SEQUENCE public.delivery_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.delivery_id_seq;
       public          postgres    false    217            &           0    0    delivery_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.delivery_id_seq OWNED BY public.delivery.id;
          public          postgres    false    216            �            1259    29946    designs    TABLE     q  CREATE TABLE public.designs (
    id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    img_path character varying(255),
    name character varying(255),
    price double precision,
    img_url character varying(255),
    view character varying(255),
    description character varying(255)
);
    DROP TABLE public.designs;
       public         heap    postgres    false            �            1259    29945    designs_id_seq    SEQUENCE     w   CREATE SEQUENCE public.designs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.designs_id_seq;
       public          postgres    false    219            '           0    0    designs_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.designs_id_seq OWNED BY public.designs.id;
          public          postgres    false    218            �            1259    29955    orders    TABLE     �   CREATE TABLE public.orders (
    id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    order_id character varying(255),
    delivery_id bigint
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    29984    orders_designs_list    TABLE     p   CREATE TABLE public.orders_designs_list (
    orders_id bigint NOT NULL,
    designs_list_id bigint NOT NULL
);
 '   DROP TABLE public.orders_designs_list;
       public         heap    postgres    false            �            1259    29954    orders_id_seq    SEQUENCE     v   CREATE SEQUENCE public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    221            (           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    220            x           2604    29931 
   clients id    DEFAULT     h   ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);
 9   ALTER TABLE public.clients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            y           2604    29940    delivery id    DEFAULT     j   ALTER TABLE ONLY public.delivery ALTER COLUMN id SET DEFAULT nextval('public.delivery_id_seq'::regclass);
 :   ALTER TABLE public.delivery ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            z           2604    29949 
   designs id    DEFAULT     h   ALTER TABLE ONLY public.designs ALTER COLUMN id SET DEFAULT nextval('public.designs_id_seq'::regclass);
 9   ALTER TABLE public.designs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            {           2604    29958 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221                      0    29928    clients 
   TABLE DATA           n   COPY public.clients (id, created_at, updated_at, address, contact_number, email, name, orders_id) FROM stdin;
    public          postgres    false    215   9,                 0    29937    delivery 
   TABLE DATA           �   COPY public.delivery (id, created_at, updated_at, receiver_address, receiver_contact_number, receiver_email, receiver_name, status) FROM stdin;
    public          postgres    false    217   V,                 0    29946    designs 
   TABLE DATA           p   COPY public.designs (id, created_at, updated_at, img_path, name, price, img_url, view, description) FROM stdin;
    public          postgres    false    219   s,                 0    29955    orders 
   TABLE DATA           S   COPY public.orders (id, created_at, updated_at, order_id, delivery_id) FROM stdin;
    public          postgres    false    221   h/                 0    29984    orders_designs_list 
   TABLE DATA           I   COPY public.orders_designs_list (orders_id, designs_list_id) FROM stdin;
    public          postgres    false    222   �/       )           0    0    clients_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.clients_id_seq', 1, false);
          public          postgres    false    214            *           0    0    delivery_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.delivery_id_seq', 1, false);
          public          postgres    false    216            +           0    0    designs_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.designs_id_seq', 33, true);
          public          postgres    false    218            ,           0    0    orders_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.orders_id_seq', 3, true);
          public          postgres    false    220            }           2606    29935    clients clients_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            postgres    false    215                       2606    29944    delivery delivery_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_pkey;
       public            postgres    false    217            �           2606    29953    designs designs_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_pkey;
       public            postgres    false    219            �           2606    29960    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    221            �           2606    29992 /   orders_designs_list fk4985tbfvbw4py38mfo5hbboyf    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders_designs_list
    ADD CONSTRAINT fk4985tbfvbw4py38mfo5hbboyf FOREIGN KEY (orders_id) REFERENCES public.orders(id);
 Y   ALTER TABLE ONLY public.orders_designs_list DROP CONSTRAINT fk4985tbfvbw4py38mfo5hbboyf;
       public          postgres    false    222    3203    221            �           2606    29987 /   orders_designs_list fk7bw0ijbrkgl9cjp4nsc38pbf7    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders_designs_list
    ADD CONSTRAINT fk7bw0ijbrkgl9cjp4nsc38pbf7 FOREIGN KEY (designs_list_id) REFERENCES public.designs(id);
 Y   ALTER TABLE ONLY public.orders_designs_list DROP CONSTRAINT fk7bw0ijbrkgl9cjp4nsc38pbf7;
       public          postgres    false    3201    219    222            �           2606    29964 #   clients fkbgfia0twpsn7sk1htgmpty99p    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT fkbgfia0twpsn7sk1htgmpty99p FOREIGN KEY (orders_id) REFERENCES public.orders(id);
 M   ALTER TABLE ONLY public.clients DROP CONSTRAINT fkbgfia0twpsn7sk1htgmpty99p;
       public          postgres    false    215    221    3203            �           2606    29969 "   orders fktkrur7wg4d8ax0pwgo0vmy20c    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fktkrur7wg4d8ax0pwgo0vmy20c FOREIGN KEY (delivery_id) REFERENCES public.delivery(id);
 L   ALTER TABLE ONLY public.orders DROP CONSTRAINT fktkrur7wg4d8ax0pwgo0vmy20c;
       public          postgres    false    3199    221    217                  x������ � �            x������ � �         �  x���ˎ�8���)��s��m�=��MI�6t=�%�J��s(*1t�#!���s�s��V�K�%r���&�9:��%��Fp���z}�oׯ���x:��n�m���Ӯzj�M������|J�U{|޴�cN���U_�m��+�Ҋl����}�fw�ޫ���'�����l8�XJ��F&��%/�M�k�6//�vS����ˮ�|(U���R�p�F@P�.&�#�B�.a4N�����8t��v�c5�}�.\��3�|�����SӶ�6 >��ք���J�o�g��e�-({D���[J.��e��[��^kep�����m��m���M
B��'Q��I��e��a�!&�3���r+Jq���_;��{�ݨ�T�r\��nfA����h0p�����l��mb���s�y��t���S�f�)ϩ;n_��C��'x>%�����%^H(Ƣ��S����x<ų�/[MZ�@���A!m�^��ϧ9@v
$�Uj�2^*�71X�\ ��g��M�*���h�ϒ��uF��)��(�rS _XEL$ơ�@�h��@t��8�9����*'&�"���<-������vģ��B�=��P�?0��s0�Dr>�RF8]tS��<�3
,�JN
D�!�K"F��3��̓M.0�׃D�E�<�Izt�A�| <��\��}l?�6s����'z*q�|Η���K���뒿���+�8��[��b�?�
�B         Y   x�}��� g�&�4}- tv�����%17��tSQ@��#:��8A�-L뇈�e7��
���,�|���kt��R˹0�_��`"z ��(            x������ � �     