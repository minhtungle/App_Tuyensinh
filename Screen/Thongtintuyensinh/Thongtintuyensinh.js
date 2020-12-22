[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://github.com/minhtungle/App_Tuyensinh.git
	fetch = +refs/heads/*:refs/remotes/origin/*
                                                                                                                                                                                                                                                                        ifyContent: "space-between",
    margin: "2%",
  },
  containerStyle: {
    height: 85,
  },
  style: {
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: "6%",
  },
  dropDownStyle: {
    backgroundColor: "#e8e8e8",
    marginTop: "5%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "#222831",
    borderWidth: 2,
  },
  placeholderStyle: {
    fontWeight: "bold",
  },
  itemStyle: {
    justifyContent: "flex-start",
  },
  labelStyle: {
    fontSize: 16,
    textAlign: "left",
    color: "#000",
  },
});
// Khai báo param của API
const data = require("./data.json");
// Dữ liệu thành phố
const datathanhpho = data.thanhpho.map((item, i) => ({
  label: item.label,
  value: item.value,
}));
// Dữ liệu cấp tuyển sinh
const datacap = data.cap.map((item, i) => ({
  label: item.label,
  value: item.value,
}));
// Dữ liệu cấp tuyển sinh
const datanamtuyensinh = data.namtuyensinh.map((item, i) => ({
  label: item.label,
  value: item.value,
}));
// Button view PDF
const ExternalLinkBtn = (props) => {
  return (
    <Button
      round
      size="large"
      color="#61b15a"
      title={props.title}
      onPress={() => {
        Linking.openURL(props.url).catch((err) => {
          console.error("Không thể kết nối trang web bởi: ", err);
          alert("Không tải được tệp");
        });
      }}
    >
      {props.title}
    </Button>
  );
};
// Component
class Thongtintuyensinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      data: [],
      // Modal
      visible: false,
      // Picker
      valueA: {},
      itemA: datathanhpho,
      isVisibleA: false,

      valueB: {},
      itemB: [],
      isVisibleB: false,

      valueC: {},
      itemC: [],
      isVisibleC: false,

      valueD: {},
      itemD: datacap,
      isVisibleD: false,

      valueE: {},
      itemE: datanamtuyensinh,
      isVisibleE: false,
    };
  }
  componentDidMount() {
    LogBox.ignoreLogs(["Animated: `useNativeDriver` was not specified."]);
  }
  componentWillUnmount() {
    this.state.visible = false;
  }
  // Tắt dropdownList khi mở cái khác
  changeVisibility(state) {
    this.setState({
      isVisibleA: false,
      isVisibleB: false,
      isVisibleC: false,
      isVisibleD: false,
      isVisibleE: false,
      ...state,
    });
  }
  // Thay đổi value A và gọi api theo value đó vào dropdownListB
  changeValueA(item) {
    this.setState({
      valueA: {
        label: item.label,
        value: item.value,
      },
    });
    this.apiPickkerB(item.value);
  }
  // Thay đổi value B và gọi api theo value đó vào dropdownListC
  changeValueB(item) {
    this.setState({
      valueB: {
        label: item.label,
        value: item.value,
      },
    });
    this.apiPickkerC(item.value);
  }
  // Tra cứu
  btn_tracuu() {
    let idquanhuyen = this.state.valueB.value;
    let idxaphuong = this.state.valueC.value;
    let caphoc = this.state.valueD.value;
    let namhoc = this.state.valueE.value;
    this.setState({ visible: true });
    this.Tracuu(namhoc, caphoc, idquanhuyen, idxaphuong);
  }
  // Lấy API cho dropdownList B (CHỌN QUẬN/HUYỆN)
  async apiPickkerB(idparent) {
    try {
      let obj = {
        value: "",
        label: "",
      };
      // console.log(idParent);
      let rs = [];
      let resp = await fetch(
        "http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=" +
          idparent +
          "&level=2"
      );
      let respJson = await resp.json();

      for (let i = 0; i < respJson.results.length; i++) {
        obj.value = respJson.results[i].ID;
        obj.label = respJson.results[i].TenDiaChi;
        rs.push(obj);
        obj = {};
      }
      // console.log(rs);
      this.setState({ itemB: rs });
    } catch (error) {
      console.log("error: " + error);
    }
  }
  // Lấy API cho dropdownList C (CHỌN PHƯỜNG/XÃ)
  async apiPickkerC(idparent) {
    try {
      let obj = {
        value: "",
        label: "",
      };
      // console.log(idParent);
      let rs = [];
      let resp = await fetch(
        "http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=" +
          idparent +
          "&level=3"
      );
      let respJson = await resp.json();

      for (let i = 0; i < respJson.results.length; i++) {
        obj.value = respJson.results[i].ID;
        obj.label = respJson.results[i].TenDiaChi;
        rs.push(obj);
        obj = {};
      }
      // console.log(rs);
      this.setState({ itemC: rs });
    } catch (error) {
      console.log("error: " + error);
    }
  }
  // Lấy API cho kết quả
  async Tracuu(namhoc, caphoc, idquanhuyen, idxaphuong) {
    // console.log(namhoc, caphoc, idquanhuyen, idxaphuong);
    try {
      let obj = {
        id: "",
        idTruong: "",
        tenFile: "",
        tieuDe: "",
        fileDinhkem: "",
      };
      let rs = [];
      let resp = await fetch(
        "http://192.168.1.13:1998/api/TSAPIService/getkehoachbyyear?namhoc=" +
          namhoc +
          "&caphoc=" +
          caphoc +
          "&idquanhuyen=" +
          idquanhuyen +
          "&idxaphuong=" +
          idxaphuong +
          ""
      );
      let respJson = await resp.json();
      // console.log(respJson);
      if (respJson.Message != "The request is invalid.") {
        for (let i = 0; i < respJson.results.length; i++) {
          obj.id = respJson.results[i].ID;
          obj.idTruong = respJson.results[i].IDTruong;
          obj.tenFile = respJson.results[i].TenFile;
          obj.tieuDe = respJson.results[i].TieuDe;
          obj.fileDinhkem = respJson.results[i].FileDinhKem;
          rs.push(obj);
          obj = {};
        }
        this.setState({ data: rs });
      } else {
        this.setState({ data: [] });
      }
    } catch (error) {
      console.log("error: " + error);
    }
  }

  render() {
    const tracuu = this.state.data;
    let view;
    console.log(tracuu.length);
    if (tracuu.length != 0) {
      view = (
        <View>
          <ExternalLinkBtn
            title={tracuu[0].tieuDe}
            url={tracuu[0].fileDinhkem}
          />
        </View>
      );
    } else {
      view = (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
        >
          <TouchableHighlight onPress={this.onPress}>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#DDDDDD",
                padding: 10,
              }}
            >
              <Text>Kết quả tìm kiếm không tồn tại</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
    return (
      <View style={styles.dropDownPicker}>
        <View>
          {/* PickerA -- CHỌN TỈNH/THÀNH PHỐ */}
          <DropDownPicker
            items={this.state.itemA}
            // Thanh tìm kiếm
            searchable={true}
            searchablePlaceholder="Nhập thông tin ..."
            searchablePlaceholderTextColor="#707070"
            seachableStyle={{}}
            searchableError={() => <Text>Không có dữ liệu</Text>}
            // Style Item
            defaultNull
            placeholder="CHỌN TỈNH/THÀNH PHỐ"
            placeholderStyle={styles.placeholderStyle}
            dropDownMaxHeight={240}
            containerStyle={styles.containerStyle}
            style={styles.style}
            dropDownStyle={styles.dropDownStyle}
            labelStyle={styles.labelStyle}
            activeLabelStyle={{ color: "#61b15a" }}
            // Ẩn hiện
            isVisible={this.state.isVisibleA}
            onOpen={() =>
              this.changeVisibility({
                isVisibleA: true,
              })
            }
            onClose={
              (() =>
                this.setState({
                  isVisibleA: false,
                }),
              Keyboard.dismiss())
            }
            // Lấy value đã chọn
            onChangeItem={(item) => this.changeValueA(item)}
          />
          {/* PickerB -- CHỌN QUẬN/HUYỆN */}
          <DropDownPicker
            items={this.state.itemB}
            // Thanh tìm kiếm
            searchable={true}
            searchablePlaceholder="Nhập thông tin ..."
            searchablePlaceholderTextColor="#707070"
            seachableStyle={{}}
            searchableError={() => <Text>Không có dữ liệu</Text>}
            // Style Item
            defaultNull
            placeholder="CHỌN QUẬN/HUYỆN"
            placeholderStyle={styles.placeholderStyle}
            dropDownMaxHeight={240}
            containerStyle={styles.containerStyle}
            style={styles.style}
            dropDownStyle={styles.dropDownStyle}
            labelStyle={styles.labelStyle}
            activeLabelStyle={{ color: "#61b15a" }}
            // Ẩn hiện
            isVisible={this.state.isVisibleB}
            onOpen={() =>
              this.changeVisibility({
                isVisibleB: true,
              })
            }
            onClose={
              (() =>
                this.setState({
                  isVisibleB: false,
                }),
              Keyboard.dismiss())
            }
            // Lấy value đã chọn
            onChangeItem={(item) =>
              this.apiPickkerC(item.value) && this.setState({ valueB: item })
            }
          />
          {/* PickerC -- CHỌN PHƯỜNG/XÃ */}
          <DropDownPicker
            items={this.state.itemC}
            // Thanh tìm kiếm
            searchable={true}
            searchablePlaceholder="Nhập thông tin ..."
            searchablePlaceholderTextColor="#707070"
            seachableStyle={{}}
            searchableError={() => <Text>Không có dữ liệu</Text>}
            // Style Item
            defaultNull
            placeholder="CHỌN PHƯỜNG/XÃ"
            placeholderStyle={styles.placeholderStyle}
            dropDownMaxHeight={240}
            containerStyle={styles.containerStyle}
            style={styles.style}
            dropDownStyle={styles.dropDownStyle}
            labelStyle={styles.labelStyle}
            activeLabelStyle={{ color: "#61b15a" }}
            // Ẩn hiện
            isVisible={this.state.isVisibleC}
            onOpen={() =>
              this.changeVisibility({
                isVisibleC: true,
              })
            }
            onClose={
              (() =>
                this.setState({
                  isVisibleC: false,
                }),
              Keyboard.dismiss())
            }
            // Lấy value đã chọn
            onChangeItem={(item) =>
              this.setState({
                valueC: {
                  label: item.label,
                  value: item.value,
                },
              })
            }
          />
          {/* PickerD -- CHỌN CẤP TUYỂN SINH */}
          <DropDownPicker
            items={this.state.itemD}
            // Thanh tìm kiếm
            searchable={true}
            searchablePlaceholder="Nhập thông tin ..."
            searchablePlaceholderTextColor="#707070"
            seachableStyle={{}}
            searchableError={() => <Text>Không có dữ liệu</Text>}
            // Style Item
            defaultNull
            placeholder="CHỌN CẤP TUYỂN SINH"
            placeholderStyle={styles.placeholderStyle}
            dropDownMaxHeight={240}
            containerStyle={styles.containerStyle}
            style={styles.style}
            dropDownStyle={styles.dropDownStyle}
            labelStyle={styles.labelStyle}
            activeLabelStyle={{ color: "#61b15a" }}
            // Ẩn hiện
            isVisible={this.state.isVisibleD}
            onOpen={() =>
              this.changeVisibility({
                isVisibleD: true,
              })
            }
            onClose={
              (() =>
                this.setState({
                  isVisibleD: false,
                }),
              Keyboard.dismiss())
            }
            // Lấy value đã chọn
            onChangeItem={(item) =>
              this.setState({
                valueD: {
                  label: item.label,
                  value: item.value,
                },
              })
            }
          />
          {/* PickerE -- CHỌN NĂM TUYỂN SINH */}
          <DropDownPicker
            items={this.state.itemE}
            // Thanh tìm kiếm
            searchable={true}
            searchablePlaceholder="Nhập thông tin ..."
            searchablePlaceholderTextColor="#707070"
            seachableStyle={{}}
            searchableError={() => <Text>Không có dữ liệu</Text>}
            // Style Item
            defaultNull
            placeholder="CHỌN NĂM TUYỂN SINH"
            placeholderStyle={styles.placeholderStyle}
            dropDownMaxHeight={240}
            containerStyle={styles.containerStyle}
            style={styles.style}
            dropDownStyle={styles.dropDownStyle}
            labelStyle={styles.labelStyle}
            activeLabelStyle={{ color: "#61b15a" }}
            // Ẩn hiện
            isVisible={this.state.isVisibleE}
            onOpen={() =>
              this.changeVisibility({
                isVisibleE: true,
              })
            }
            onClose={
              (() =>
                this.setState({
                  isVisibleE: false,
                }),
              Keyboard.dismiss())
            }
            // Lấy value đã chọn
            onChangeItem={(item) =>
              this.setState({
                valueE: {
                  label: item.label,
                  value: item.value,
                },
              })
            }
          />
        </View>
        <Animated.View
          style={{ alignSelf: "center", marginTop: "10%", zIndex: 1 }}
        >
          <Button
            round
            size="large"
            color="#61b15a"
            // onPress={() => this.setState({ visible: true })}
            onPress={() => this.btn_tracuu()}
          >
            Tra cứu
          </Button>
          <Modal.BottomModal
            visible={this.state.visible}
            onTouchOutside={() => this.setState({ visible: false })}
            height={0.925}
            width={1}
            onSwipeOut={() => this.setState({ visible: false })}
            modalTitle={<ModalTitle title="Kết quả tra cứu" hasTitleBar />}
            footer={
              <ModalFooter>
                <ModalButton
                  text="CANCEL"
                  onPress={() => this.setState({ visible: false })}
                />
                <ModalButton text="OK" onPress={() => {}} />
              </ModalFooter>
            }
          >
            <ModalContent
              style={{
                flex: 1,
                backgroundColor: "fff",
              }}
            >
              {view}
            </ModalContent>
          </Modal.BottomModal>
        </Animated.View>
      </View>
    );
  }
}
export default Thongtintuyensinh;
